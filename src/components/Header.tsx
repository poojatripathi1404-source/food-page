import React, { useState, useEffect } from 'react';
import { Link } from '../router/Link';
import { useRouter } from '../router/router';
import { Bookmark, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { route } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookmarkCount, setBookmarkCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      try {
        const saved = JSON.parse(localStorage.getItem('culinary_bookmarks') || '[]');
        setBookmarkCount(saved.length);
      } catch {
        setBookmarkCount(0);
      }
    };
    updateCount();
    window.addEventListener('storage', updateCount);
    window.addEventListener('bookmark-updated', updateCount);
    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener('bookmark-updated', updateCount);
    };
  }, []);

  const navLinks = [
    { label: 'Journal', path: '/' },
    { label: 'All Recipes', path: '/recipes' },
    { label: 'Techniques', path: '/category/Artisan%20Baking' },
    { label: 'Heritage', path: '/category/Heritage%20Broths' },
    { label: 'Philosophy', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: Brand — 4-5 Links — 1 Primary Action */}
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Wordmark */}
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-serif tracking-tight font-medium text-stone-900 hover:text-stone-700 transition-colors whitespace-nowrap shrink-0"
          >
            L’Atelier Gourmand
          </Link>

          {/* Zone 2: 4-5 single-line clean text links with hover underline */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            {navLinks.map((link) => {
              const active = route.pathname === link.path || (link.path === '/' && route.route === 'home');
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`whitespace-nowrap shrink-0 transition-colors hover:text-stone-950 ${
                    active ? 'text-stone-950 font-semibold underline underline-offset-8 decoration-stone-900' : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/bookmarks"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-stone-800 bg-stone-100 border border-stone-200 rounded-lg hover:bg-stone-200 hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
              title="View your saved articles and recipes"
            >
              <Bookmark className="w-3.5 h-3.5 text-stone-600" />
              <span>Saved Articles</span>
              {bookmarkCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 bg-stone-900 text-stone-50 rounded text-[10px] font-mono">
                  {bookmarkCount}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-700 hover:text-stone-950 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 py-4 px-2 space-y-2 bg-[#FAF8F5]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
