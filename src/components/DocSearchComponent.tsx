'use client';

import { useEffect, useState, useRef } from 'react';
import algoliasearch from 'algoliasearch/lite';

/**
 * DocSearchComponent - Algolia-powered search for documentation
 *
 * This component is only rendered if Algolia credentials are properly configured.
 * It provides keyboard shortcuts (Cmd+K / Ctrl+K) for searching across all documentation.
 *
 * Environment Variables Required:
 * - NEXT_PUBLIC_ALGOLIA_APP_ID
 * - NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
 *
 * If these are not set, the component returns null and no search UI is displayed.
 */
export function DocSearchComponent() {
  // Check if Algolia credentials are configured
  const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
  const searchApiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;

  // Return null if credentials are not configured - search is disabled by default
  if (!appId || !searchApiKey) {
    return null;
  }

  return <DocSearchUI appId={appId} searchApiKey={searchApiKey} />;
}

/**
 * Internal UI component for search
 * Only rendered when credentials are available
 */
function DocSearchUI({ appId, searchApiKey }: { appId: string; searchApiKey: string }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchClientRef = useRef<any>(null);
  const indexRef = useRef<any>(null);
  const searchBoxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (appId && searchApiKey) {
      const client = algoliasearch(appId, searchApiKey);
      searchClientRef.current = client;
      indexRef.current = client.initIndex('documentation');
      console.log('✅ Algolia search initialized');
    }

    // Handle Cmd+K / Ctrl+K
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => searchBoxRef.current?.focus(), 0);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        setResults([]);
        setSearchQuery('');
      }
      if (e.key === 'ArrowDown' && results.length > 0) {
        e.preventDefault();
        setSelectedIndex(i => (i < results.length - 1 ? i + 1 : 0));
      }
      if (e.key === 'ArrowUp' && results.length > 0) {
        e.preventDefault();
        setSelectedIndex(i => (i > 0 ? i - 1 : results.length - 1));
      }
      if (e.key === 'Enter' && selectedIndex >= 0 && results[selectedIndex]) {
        window.location.href = results[selectedIndex].url;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [results, selectedIndex, appId, searchApiKey]);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setSelectedIndex(-1);

    if (!query || !indexRef.current) {
      setResults([]);
      return;
    }

    try {
      const response = await indexRef.current.search(query, {
        hitsPerPage: 10,
      });
      setResults(response.hits || []);
      console.log(`Found ${response.hits?.length || 0} results for "${query}"`);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    }
  };

  return (
    <>
      <style>{`
        .docsearch-container {
          position: fixed;
          top: 12px;
          right: 60px;
          z-index: 40;
          display: flex;
          align-items: center;
        }

        .docsearch-box {
          display: flex;
          align-items: center;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 6px 10px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          cursor: text;
          font-size: 13px;
        }

        .docsearch-box input {
          border: none;
          outline: none;
          font-size: 13px;
          width: 140px;
          background: transparent;
          padding: 0 4px;
        }

        .docsearch-box input::placeholder {
          color: #9ca3af;
        }

        .docsearch-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 100px;
          z-index: 1000;
        }

        .docsearch-dialog {
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
          width: 90%;
          max-width: 600px;
          max-height: 60vh;
          overflow-y: auto;
        }

        .docsearch-input-wrapper {
          padding: 16px;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
        }

        .docsearch-input-wrapper input {
          width: 100%;
          padding: 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 16px;
          outline: none;
        }

        .docsearch-results {
          padding: 8px 0;
        }

        .docsearch-result {
          padding: 12px 16px;
          cursor: pointer;
          border-bottom: 1px solid #f3f4f6;
          transition: background-color 0.2s;
        }

        .docsearch-result:hover,
        .docsearch-result.selected {
          background: #f3f4f6;
        }

        .docsearch-result-title {
          font-weight: 600;
          font-size: 14px;
          color: #1f2937;
        }

        .docsearch-result-path {
          font-size: 12px;
          color: #6b7280;
          margin-top: 4px;
        }

        .docsearch-no-results {
          padding: 20px 16px;
          text-align: center;
          color: #6b7280;
        }
      `}</style>

      <div className="docsearch-container">
        <div className="docsearch-box" onClick={() => setIsOpen(true)}>
          <span style={{ marginRight: '5px', fontSize: '13px' }}>🔍</span>
          <input
            ref={searchBoxRef}
            type="text"
            placeholder="Search..."
            readOnly
            style={{ cursor: 'text' }}
          />
          <span style={{ marginLeft: '6px', fontSize: '11px', color: '#9ca3af', fontWeight: '500' }}>⌘K</span>
        </div>
      </div>

      {isOpen && (
        <div className="docsearch-modal" onClick={() => setIsOpen(false)}>
          <div className="docsearch-dialog" onClick={e => e.stopPropagation()}>
            <div className="docsearch-input-wrapper">
              <input
                ref={searchBoxRef}
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={e => handleSearch(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Escape') {
                    setIsOpen(false);
                  }
                }}
                autoFocus
              />
            </div>
            <div className="docsearch-results">
              {results.length === 0 && searchQuery ? (
                <div className="docsearch-no-results">No results for "{searchQuery}"</div>
              ) : results.length > 0 ? (
                results.map((result, index) => (
                  <div
                    key={result.objectID}
                    className={`docsearch-result ${selectedIndex === index ? 'selected' : ''}`}
                    onClick={() => {
                      window.location.href = result.url;
                    }}
                  >
                    <div className="docsearch-result-title">
                      {result.lvl1 ? `${result.lvl0} > ${result.lvl1}` : result.lvl0}
                    </div>
                    <div className="docsearch-result-path">{result.url}</div>
                  </div>
                ))
              ) : (
                <div style={{ padding: '20px 16px', textAlign: 'center', color: '#9ca3af' }}>
                  Start typing to search...
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
