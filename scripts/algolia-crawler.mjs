#!/usr/bin/env node

/**
 * Algolia Crawler Script with Auto-Detection
 *
 * This script crawls your documentation and indexes it in Algolia.
 * It automatically detects your site's base path to prevent 404s.
 *
 * Features:
 * - Auto-detects BASE_PATH from environment or next.config.ts
 * - Hierarchical indexing (page -> h2 sections -> h3 sections)
 * - Graceful error handling with helpful messages
 * - Configurable via environment variables
 *
 * Prerequisites:
 * 1. Set Algolia credentials in .env.local:
 *    NEXT_PUBLIC_ALGOLIA_APP_ID=your_app_id
 *    ALGOLIA_WRITE_API_KEY=your_admin_key
 *
 * 2. Optionally set BASE_PATH (auto-detected if not set):
 *    BASE_PATH=/docs
 *
 * Usage:
 * - npm run index
 */

import algoliasearch from 'algoliasearch/dist/algoliasearch.umd';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.dirname(__dirname);

// Load environment variables from .env.local
const envPath = path.join(rootDir, '.env.local');
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

// Algolia credentials (from environment variables)
const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const writeApiKey = process.env.ALGOLIA_WRITE_API_KEY;
const indexName = 'documentation';

if (!appId || !writeApiKey) {
  console.error('❌ Missing Algolia credentials!');
  console.error('');
  console.error('Please set the following in .env.local:');
  console.error('  NEXT_PUBLIC_ALGOLIA_APP_ID=your_app_id');
  console.error('  ALGOLIA_WRITE_API_KEY=your_admin_key');
  console.error('');
  console.error('See README.md for detailed setup instructions.');
  process.exit(1);
}

const client = algoliasearch(appId, writeApiKey);
const index = client.initIndex(indexName);

/**
 * Auto-detect the base path from environment or configuration
 * Prevents 404s when site is deployed under a subdirectory (e.g., /docs)
 */
function detectBasePath() {
  // 1. Check explicit environment variable
  if (process.env.BASE_PATH) {
    console.log(`📍 Using BASE_PATH from environment: ${process.env.BASE_PATH}`);
    return process.env.BASE_PATH;
  }

  // 2. Check NEXT_PUBLIC_BASE_PATH
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    console.log(`📍 Using NEXT_PUBLIC_BASE_PATH from environment: ${process.env.NEXT_PUBLIC_BASE_PATH}`);
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }

  // 3. Check next.config.ts for basePath configuration
  try {
    const nextConfigPath = path.join(rootDir, 'next.config.ts');
    if (fs.existsSync(nextConfigPath)) {
      const configContent = fs.readFileSync(nextConfigPath, 'utf-8');
      const basePathMatch = configContent.match(/basePath\s*:\s*['"]([^'"]+)['"]/);
      if (basePathMatch) {
        const detectedPath = basePathMatch[1];
        console.log(`📍 Detected BASE_PATH from next.config.ts: ${detectedPath}`);
        return detectedPath;
      }
    }
  } catch (error) {
    // Silent fail - basePath not found in config
  }

  // 4. Default to empty (root path)
  console.log(`📍 No BASE_PATH detected, using root path`);
  return '';
}

const BASE_PATH = detectBasePath();

/**
 * Parse MDX content and split by heading hierarchy
 */
function parseAndSplitContent(content, baseUrl, fileName, pageTitle) {
  const records = [];
  const cleanContent = content.replace(/^---[\s\S]*?---\n/, '');

  // For Next.js App Router, page.mdx files become the route for their directory
  // So we remove the /page part from the URL
  const pageUrl = fileName.replace(/\.(mdx|md)$/, '') === 'page'
    ? baseUrl || '/'
    : `${baseUrl}/${fileName.replace(/\.(mdx|md)$/, '')}`;

  // Main page record (lvl0)
  const mainRecord = {
    objectID: `${baseUrl}/${fileName}`.replace(/[\\/.]/g, '_'),
    lvl0: pageTitle,
    content: cleanContent.substring(0, 8000),
    url: pageUrl,
  };
  records.push(mainRecord);

  // Parse h2 sections (lvl1)
  const h2Regex = /^## (.+?)$/gm;
  let h2Match;
  while ((h2Match = h2Regex.exec(cleanContent)) !== null) {
    const h2Title = h2Match[1];
    const h2StartIndex = h2Match.index;
    const h2EndIndex = cleanContent.indexOf('##', h2StartIndex + 1);
    const h2Content = cleanContent.substring(h2StartIndex, h2EndIndex === -1 ? cleanContent.length : h2EndIndex);

    const h2Record = {
      objectID: `${baseUrl}/${fileName}_${h2Title.replace(/\s+/g, '_')}`.replace(/[\\/.]/g, '_'),
      lvl0: pageTitle,
      lvl1: h2Title,
      content: h2Content.substring(0, 5000),
      url: `${pageUrl}#${h2Title.toLowerCase().replace(/\s+/g, '-')}`,
    };
    records.push(h2Record);

    // Parse h3 sections within h2 (lvl2)
    const h3Regex = /^### (.+?)$/gm;
    let h3Match;
    while ((h3Match = h3Regex.exec(h2Content)) !== null) {
      const h3Title = h3Match[1];
      const h3StartIndex = h2StartIndex + h3Match.index;
      const h3EndIndex = cleanContent.indexOf('###', h3StartIndex + 1);
      const h3Content = cleanContent.substring(h3StartIndex, h3EndIndex === -1 ? cleanContent.length : h3EndIndex);

      const h3Record = {
        objectID: `${baseUrl}/${fileName}_${h2Title.replace(/\s+/g, '_')}_${h3Title.replace(/\s+/g, '_')}`.replace(/[\\/.]/g, '_'),
        lvl0: pageTitle,
        lvl1: h2Title,
        lvl2: h3Title,
        content: h3Content.substring(0, 3000),
        url: `${pageUrl}#${h3Title.toLowerCase().replace(/\s+/g, '-')}`,
      };
      records.push(h3Record);
    }
  }

  return records;
}

/**
 * Scan MDX files from the docs directory
 */
function scanMdxFiles(dir, baseUrl = '') {
  const records = [];
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      // Recursively scan subdirectories
      records.push(...scanMdxFiles(fullPath, `${baseUrl}/${file.name}`));
    } else if (file.name.endsWith('.mdx') || file.name.endsWith('.md')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf-8');

        // Extract title from first h1 heading
        const titleMatch = content.match(/^#\s+(.+?)$/m);
        const title = titleMatch ? titleMatch[1].trim() : file.name.replace(/\.(mdx|md)$/, '');

        // Parse and split content by heading hierarchy
        const fileRecords = parseAndSplitContent(content, baseUrl, file.name, title);
        records.push(...fileRecords);
        console.log(`✅ Indexed: ${title} (${fileRecords.length} records)`);
      } catch (error) {
        console.warn(`⚠️  Failed to index ${file.name}:`, error.message);
      }
    }
  }

  return records;
}

async function indexDocumentation() {
  console.log('🔍 Scanning documentation files...\n');

  const docsDir = path.join(rootDir, 'src', 'app');

  // Check if src/app directory exists
  if (!fs.existsSync(docsDir)) {
    console.error('❌ Documentation directory not found!');
    console.error(`   Expected directory: ${docsDir}`);
    process.exit(1);
  }

  const records = scanMdxFiles(docsDir, BASE_PATH);

  if (records.length === 0) {
    console.warn('⚠️  No MDX/MD files found. Make sure you have documentation in src/app/');
    return;
  }

  console.log(`\n📤 Uploading ${records.length} records to Algolia...\n`);

  try {
    // Test API key permissions first
    try {
      await client.getApiKey(writeApiKey);
      console.log('✅ API key verified');
    } catch (apiError) {
      console.warn('⚠️  Could not verify API key, but attempting to proceed...');
    }

    // Clear the index first to remove old records with incorrect field structure
    console.log('🗑️  Clearing old index records...');
    try {
      await index.clearObjects();
      console.log('✅ Index cleared');
    } catch (clearError) {
      console.warn('⚠️  Could not clear index (non-critical):');
      console.warn(`   Error: ${clearError.message}`);
    }

    // Try to save objects
    console.log(`Saving ${records.length} records...`);
    const response = await index.saveObjects(records);
    console.log(`✅ Successfully indexed ${records.length} records`);
    console.log(`   Task ID: ${response.taskID}`);

    // Set up Algolia settings with correct searchableAttributes for DocSearch fields
    try {
      await index.setSettings({
        searchableAttributes: ['lvl0', 'lvl1', 'lvl2', 'content'],
        ranking: ['typo', 'geo', 'words', 'filters', 'proximity', 'attribute', 'exact', 'custom'],
        customRanking: ['desc(lvl0)'],
        attributesToHighlight: ['lvl0', 'lvl1', 'lvl2', 'content'],
        highlightPreTag: '<mark>',
        highlightPostTag: '</mark>',
        attributeForDistinct: 'url',
        distinct: 1,
      });
      console.log('✅ Index settings configured for DocSearch');
    } catch (settingsError) {
      console.warn('⚠️  Could not set index settings (may need admin key)');
      console.warn(`   Error: ${settingsError.message}`);
    }

    console.log('\n✅ Algolia index updated successfully!');
    console.log(`📊 Total records: ${records.length}`);
    console.log(`📍 Base path: ${BASE_PATH || '(root)'}`);
    console.log('🚀 Your search is now ready to use!');
  } catch (error) {
    console.error('\n❌ Failed to index documentation:');
    console.error(`   Error: ${error.message}`);
    console.error(`   Status: ${error.status}`);

    if (error.status === 403 || error.message.includes('not allowed')) {
      console.error('\n⚠️  Permission Issue:');
      console.error('   Your API key may not have write permissions to this index.');
      console.error('   ');
      console.error('   Solutions:');
      console.error('   1. Check that ALGOLIA_WRITE_API_KEY has "Write access to indices" permission');
      console.error('   2. Verify the API key is not restricted to specific indices');
      console.error('   3. Go to https://dashboard.algolia.com/account/api-keys');
      console.error('   4. Edit the key and ensure it has write permissions');
    }

    process.exit(1);
  }
}

// Run the indexing
indexDocumentation().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
