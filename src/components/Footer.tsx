import React from 'react';
import { Link } from '../router/Link';
import { BLOG_POSTS } from '../data/blogPosts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-20 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <span className="font-serif text-2xl text-stone-100 tracking-tight font-medium block">
              L’Atelier Gourmand
            </span>
            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              An independent culinary journal dedicated to the chemistry, ancestral heritage, and artisanal craft of global food traditions. Every story includes scalable formulas, botanical notes, and authentic techniques.
            </p>
            <div className="text-xs text-stone-500 pt-2 font-mono">
              Volume IV · Curated for Cooks & Connoisseurs · Autumn 2026
            </div>
          </div>

          {/* Featured Articles Quick Links with Unique URLs */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-4">
              Featured Articles
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              {BLOG_POSTS.slice(0, 5).map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-stone-100 transition-colors block truncate"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation & Archives */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-4">
              Explore The Journal
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link to="/" className="hover:text-stone-100 transition-colors">
                  Front Page & Editorial Lead
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="hover:text-stone-100 transition-colors">
                  Complete 10-Article Recipe Index
                </Link>
              </li>
              <li>
                <Link to="/bookmarks" className="hover:text-stone-100 transition-colors">
                  Saved Reading List
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-stone-100 transition-colors">
                  Curatorial Editorial Philosophy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Hairline separator & bottom row */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 L’Atelier Gourmand. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Printed on Archival Digital Paper</span>
            <span>·</span>
            <span>Independent Culinary Publishing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
