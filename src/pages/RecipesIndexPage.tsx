import React, { useState, useMemo } from 'react';
import { BLOG_POSTS } from '../data/blogPosts';
import { Link } from '../router/Link';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Clock, ArrowRight, ChefHat, Filter, ArrowUpDown, Sparkles, BookOpen } from 'lucide-react';

export const RecipesIndexPage: React.FC = () => {
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'title' | 'readTime' | 'difficulty'>('title');

  const categories = useMemo(() => {
    const list = Array.from(new Set(BLOG_POSTS.map(p => p.category)));
    return ['All', ...list];
  }, []);

  const filtered = useMemo(() => {
    let list = [...BLOG_POSTS];
    if (difficultyFilter !== 'All') {
      list = list.filter(p => p.difficulty === difficultyFilter);
    }
    if (categoryFilter !== 'All') {
      list = list.filter(p => p.category === categoryFilter);
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
  }, [difficultyFilter, categoryFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      
      {/* Editorial Header */}
      <div className="border-b border-stone-200 pb-8 text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">
          The Complete Kitchen Index
        </span>
        {/* Single clear H1 */}
        <h1 className="text-3xl sm:text-5xl font-serif font-medium text-stone-900 mt-2">
          Tested Homemade Recipes & Quick Food Ideas
        </h1>
        <p className="text-stone-600 mt-3 text-sm sm:text-base font-serif italic">
          Every tested technique, quick breakfast formula, and wholesome dinner idea published in our test kitchen archives.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-stone-600">
          <Link
            to="/heritage"
            className="text-stone-900 underline underline-offset-4 hover:text-stone-700"
          >
            Read the cultural history and ancestral traditions of our dishes →
          </Link>
          <span>·</span>
          <Link
            to="/techniques"
            className="text-stone-900 underline underline-offset-4 hover:text-stone-700"
          >
            Master essential cooking techniques with step-by-step guidance →
          </Link>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 py-6 border-b border-stone-200">
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-stone-400" />
            <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Difficulty:</span>
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
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

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Category:</span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="text-xs bg-white border border-stone-300 rounded-md px-2.5 py-1 focus:outline-none focus:border-stone-800"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
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

      {/* Grid of All Recipes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filtered.map(post => {
          const targetUrl = post.customPath || `/recipes/${post.slug}`;
          return (
            <article
              key={post.slug}
              className="group flex flex-col justify-between bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-sm transition-all"
            >
              <div>
                <Link to={targetUrl} className="block relative aspect-16/10 overflow-hidden bg-stone-100">
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
                    <span aria-hidden="true">·</span>
                    <span>{post.difficulty}</span>
                  </div>

                  <Link to={targetUrl} className="block">
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
                <span className="font-mono text-stone-400 text-xs truncate max-w-[170px]">
                  {targetUrl}
                </span>
                <Link
                  to={targetUrl}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 hover:text-stone-700"
                >
                  <span>View Recipe Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* AEO (Answer Engine Optimization) Direct Questions & Answer-First Section */}
      <section className="mt-16 bg-white border border-stone-200 rounded-2xl p-8 sm:p-10 shadow-2xs">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">
            Recipe Selection & Meal Planning FAQ
          </span>
          <div className="mt-6 space-y-8">
            
            {/* Direct Question H2 #1 */}
            <div className="border-b border-stone-100 pb-6">
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
                How do you pick the right recipe for quick weeknight dinners versus weekend projects?
              </h2>
              {/* Answer-first 1-2 sentence paragraph */}
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mt-2.5">
                For quick weeknight dinners, choose recipes with a 15 to 30 minute cook time that utilize single-skillet methods and pantry proteins like our healthy chicken dinner or fluffy cheese omelette. Save multi-hour projects requiring dough fermentation or long spice braising for relaxed weekend culinary sessions.
              </p>
              <div className="mt-3 text-xs text-stone-600">
                <span>Featured weeknight choice: </span>
                <Link
                  to="/recipes/healthy-chicken-dinner"
                  className="font-medium text-stone-900 underline hover:text-stone-700"
                >
                  Discover our quick healthy chicken dinner guide
                </Link>
              </div>
            </div>

            {/* Direct Question H2 #2 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
                Can these homemade recipes be prepared ahead of time for meal prep?
              </h2>
              {/* Answer-first 1-2 sentence paragraph */}
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mt-2.5">
                Hearty vegetable and legume curries along with roasted chicken breasts store exceptionally well in airtight glass containers for up to four days in the refrigerator. In fact, curries develop deeper spice synergy overnight as whole ground aromatics continue to infuse the coconut gravy.
              </p>
              <div className="mt-3 text-xs text-stone-600">
                <span>Meal prep favorite: </span>
                <Link
                  to="/recipes/vegetarian-curry"
                  className="font-medium text-stone-900 underline hover:text-stone-700"
                >
                  Browse hearty vegetarian main course dishes
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
