import React, { useState, useMemo } from 'react';
import { BLOG_POSTS } from '../data/blogPosts';
import { Link } from '../router/Link';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Clock, ArrowRight, ChefHat, Filter, ArrowUpDown } from 'lucide-react';

export const RecipesIndexPage: React.FC = () => {
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'title' | 'readTime' | 'difficulty'>('title');

  const filtered = useMemo(() => {
    let list = [...BLOG_POSTS];
    if (difficultyFilter !== 'All') {
      list = list.filter(p => p.difficulty === difficultyFilter);
    }
    if (sortBy === 'title') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'readTime') {
      list.sort((a, b) => a.readTimeMinutes - b.readTimeMinutes);
    } else if (sortBy === 'difficulty') {
      const rank: Record<string, number> = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Masterclass': 4 };
      list.sort((a, b) => (rank[a.difficulty] || 0) - (rank[b.difficulty] || 0));
    }
    return list;
  }, [difficultyFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      
      {/* Editorial Header */}
      <div className="border-b border-stone-200 pb-8 text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">
          The Complete Master Index
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-medium text-stone-900 mt-2">
          All 10 Culinary Articles & Recipes
        </h1>
        <p className="text-stone-600 mt-3 text-sm sm:text-base font-serif italic">
          Every tested technique, authentic regional dish, and slow-crafted formula published in Volume IV of L’Atelier Gourmand.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-b border-stone-200">
        
        {/* Difficulty Filter */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-stone-400" />
          <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Difficulty:</span>
          {['All', 'Beginner', 'Intermediate', 'Advanced', 'Masterclass'].map(level => (
            <button
              key={level}
              onClick={() => setDifficultyFilter(level)}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                difficultyFilter === level
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-4 h-4 text-stone-400" />
          <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs bg-white border border-stone-300 rounded-md px-2.5 py-1.5 focus:outline-none focus:border-stone-800"
          >
            <option value="title">Alphabetical (A-Z)</option>
            <option value="readTime">Read Time (Shortest first)</option>
            <option value="difficulty">Complexity Level</option>
          </select>
        </div>
      </div>

      {/* Grid of All 10 Recipes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filtered.map(post => (
          <article
            key={post.slug}
            className="group flex flex-col justify-between bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-sm transition-all"
          >
            <div>
              <Link to={`/blog/${post.slug}`} className="block relative aspect-16/10 overflow-hidden bg-stone-100">
                <ImageWithFallback
                  src={post.heroImage}
                  alt={post.imageAlt || post.title}
                  fallbackTitle={post.title}
                  className="group-hover:scale-104 transition-transform duration-500 object-cover"
                  containerClassName="w-full h-full"
                />
              </Link>

              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span>{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.origin}</span>
                </div>

                <Link to={`/blog/${post.slug}`} className="block">
                  <h3 className="font-serif text-xl font-medium text-stone-900 group-hover:text-stone-700 leading-snug">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs text-stone-600 line-clamp-2">
                  {post.subtitle}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>Prep: {post.prepTime}</span>
                  <span>Cook: {post.cookTime}</span>
                </div>
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
                <span>Read Masterclass</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
