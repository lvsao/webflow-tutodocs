#!/usr/bin/env node

import { algoliasearch } from 'algoliasearch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.dirname(__dirname);

// Load environment variables
const envPath = path.join(rootDir, '.env.local');
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const writeApiKey = process.env.ALGOLIA_WRITE_API_KEY;
const indexName = 'documentation';

if (!appId || !writeApiKey) {
  console.error('❌ Missing Algolia credentials in .env.local');
  console.error('Set NEXT_PUBLIC_ALGOLIA_APP_ID and ALGOLIA_WRITE_API_KEY');
  process.exit(1);
}

const client = algoliasearch(appId, writeApiKey);

function parseContent(content, baseUrl, fileName, title) {
  const records = [];
  const cleanContent = content.replace(/^---[\s\S]*?---\n/, '');

  const pageUrl = fileName.replace(/\.(mdx|md)$/, '') === 'page'
    ? baseUrl || '/'
    : `${baseUrl}/${fileName.replace(/\.(mdx|md)$/, '')}`;

  records.push({
    objectID: `${pageUrl}`.replace(/[\/.]/g, '_'),
    lvl0: title,
    content: cleanContent.substring(0, 8000),
    url: pageUrl,
  });

  return records;
}

function scanMdxFiles(dir, baseUrl = '') {
  const records = [];
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      records.push(...scanMdxFiles(fullPath, `${baseUrl}/${file.name}`));
    } else if (file.name.endsWith('.mdx') || file.name.endsWith('.md')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const titleMatch = content.match(/^#\s+(.+?)$/m);
        const title = titleMatch ? titleMatch[1].trim() : file.name;

        const fileRecords = parseContent(content, baseUrl, file.name, title);
        records.push(...fileRecords);
        console.log(`✅ ${title} (${fileRecords.length} records)`);
      } catch (error) {
        console.warn(`⚠️  ${file.name}: ${error.message}`);
      }
    }
  }

  return records;
}

async function index() {
  console.log('🔍 Scanning documentation...\n');

  const docsDir = path.join(rootDir, 'src', 'app');
  if (!fs.existsSync(docsDir)) {
    console.error('❌ src/app not found');
    process.exit(1);
  }

  const records = scanMdxFiles(docsDir, '');

  if (records.length === 0) {
    console.warn('⚠️  No MDX files found');
    return;
  }

  console.log(`\n📤 Uploading ${records.length} records...\n`);

  try {
    await client.saveObjects({
      indexName,
      objects: records,
    });
    console.log(`✅ Indexed ${records.length} records`);
  } catch (error) {
    console.error('❌ Failed:', error.message);
    process.exit(1);
  }
}

index();
