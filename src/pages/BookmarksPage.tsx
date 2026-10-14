import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../data/blogPosts';
import { BlogPost } from '../types';
import { Link } from '../router/Link';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Bookmark, ArrowRight, Trash2, ArrowLeft } from 'lucide-react';

export const BookmarksPage: React.FC = () => {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('culinary_bookmarks') || '[]');
      setSavedSlugs(saved);
    } catch {
      setSavedSlugs([]);
    }
  }, []);

  const removeBookmark = (slug: string) => {
    const next = savedSlugs.filter(s => s !== slug);
    setSavedSlugs(next);
    localStorage.setItem('culinary_bookmarks', JSON.stringify(next));
    window.dispatchEvent(new Event('bookmark-updated'));
  };

  const clearAll = () => {
    setSavedSlugs([]);
    localStorage.setItem('culinary_bookmarks', JSON.stringify([]));
    window.dispatchEvent(new Event('bookmark-updated'));
  };

  const savedPosts = BLOG_POSTS.filter(p => savedSlugs.includes(p.slug));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-200 gap-4">
        <div>
          <div className="flex items-center gap-2 text-stone-500 text-xs font-mono uppercase tracking-wider">
            <Bookmark className="w-3.5 h-3.5 text-stone-800" />
            <span>Personal Reading Archive</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 mt-1">
            Saved Articles & Recipes
          </h1>
          <p className="text-xs text-stone-500 mt-0.5">
            Your bookmarked stories for quick kitchen reference ({savedPosts.length} saved)
          </p>
        </div>

        {savedPosts.length > 0 && (
          <button
            onClick={clearAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors self-start sm:self-auto"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Reading List</span>
          </button>
        )}
      </div>

      {savedPosts.length === 0 ? (
        <div className="text-center py-24 max-w-md mx-auto">
          <Bookmark className="w-12 h-12 text-stone-300 mx-auto mb-4" />
          <h2 className="text-xl font-serif font-medium text-stone-900">
            No saved culinary articles yet
          </h2>
          <p className="text-sm text-stone-500 mt-1 leading-relaxed">
            Click the bookmark icon on any article card or detail page to save it here for offline kitchen reference.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Browse All 10 Articles</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {savedPosts.map(post => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs"
            >
              <div>
                <Link to={`/blog/${post.slug}`} className="block relative aspect-16/10 overflow-hidden bg-stone-100">
                  <ImageWithFallback
                    src={post.heroImage}
                    alt={post.title}
                    fallbackTitle={post.title}
                    className="group-hover:scale-104 transition-transform duration-500 object-cover"
                    containerClassName="w-full h-full"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeBookmark(post.slug);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white text-stone-700 hover:text-red-700 shadow-xs transition-colors"
                    title="Remove from saved"
                    aria-label="Remove bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </Link>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTimeMinutes} min</span>
                  </div>

                  <Link to={`/blog/${post.slug}`} className="block">
                    <h3 className="font-serif text-xl font-medium text-stone-900 group-hover:text-stone-700 leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-stone-600 line-clamp-2">
                    {post.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="font-mono text-stone-400 text-xs">
                  /blog/{post.slug}
                </span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 hover:text-stone-700"
                >
                  <span>Open Recipe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
