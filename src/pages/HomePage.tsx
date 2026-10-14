import React, { useState, useMemo } from 'react';
import { BLOG_POSTS } from '../data/blogPosts';
import { Link } from '../router/Link';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Search, Clock, ArrowRight, Bookmark, ChefHat, Sparkles, Check } from 'lucide-react';
import { BlogPost } from '../types';

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [savedSlugs, setSavedSlugs] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('culinary_bookmarks') || '[]');
    } catch {
      return [];
    }
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const categories = useMemo(() => {
    const list = Array.from(new Set(BLOG_POSTS.map(p => p.category)));
    return ['All', ...list];
  }, []);

  const toggleBookmark = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    e.stopPropagation();
    const next = savedSlugs.includes(slug)
      ? savedSlugs.filter(s => s !== slug)
      : [...savedSlugs, slug];
    setSavedSlugs(next);
    localStorage.setItem('culinary_bookmarks', JSON.stringify(next));
    window.dispatchEvent(new Event('bookmark-updated'));
  };

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
      if (!matchesCat) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const matchTitle = post.title.toLowerCase().includes(q);
      const matchSub = post.subtitle.toLowerCase().includes(q);
      const matchSummary = post.summary.toLowerCase().includes(q);
      const matchTag = post.tags.some(t => t.toLowerCase().includes(q));
      const matchIng = post.ingredients.some(i => i.item.toLowerCase().includes(q));
      return matchTitle || matchSub || matchSummary || matchTag || matchIng;
    });
  }, [selectedCategory, searchQuery]);

  const leadStory = BLOG_POSTS[0]; // Neapolitan pizza lead story
  const secondaryStories = BLOG_POSTS.slice(1, 4);
  const remainingStories = BLOG_POSTS.slice(4);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSuccess(false), 4000);
  };

  return (
    <div className="min-h-screen">
      
      {/* Editorial Broadsheet Masthead */}
      <section className="border-b border-stone-300 pt-8 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] uppercase tracking-widest text-stone-500 font-mono pb-4 border-b border-stone-200">
          <span>Vol. IV · No. 42 · The Autumn Issue</span>
          <span className="hidden sm:inline">Daily Culinary Dispatches & Tested Formulas</span>
          <span>Printed in Digital Alabaster</span>
        </div>

        <div className="py-8 sm:py-10">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-mono mb-2">My Food Site · Daily Tested Kitchen Formulas</div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-stone-900 leading-tight">
            Easy Homemade Recipes & Quick Food Ideas for Every Kitchen
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto font-serif italic">
            Discover easy homemade recipes and fast weeknight dinner ideas. Learn step-by-step cooking techniques with pantry ingredients.
          </p>
        </div>

        {/* Filter bar & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-4 border-t border-stone-200">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-white shadow-2xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[260px] sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search recipes, ingredients, tags..."
              className="w-full text-xs pl-9 pr-4 py-2 bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-stone-800 placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        
        {/* If filtering or searching, show filtered grid */}
        {(selectedCategory !== 'All' || searchQuery.trim().length > 0) ? (
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
              <h2 className="text-2xl font-serif font-medium text-stone-900">
                Filtered Articles ({filteredPosts.length})
              </h2>
              <span className="text-xs text-stone-500">
                Showing results for {selectedCategory !== 'All' ? `"${selectedCategory}"` : ''} {searchQuery ? `query "${searchQuery}"` : ''}
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-stone-50 rounded-xl border border-dashed border-stone-300">
                <ChefHat className="w-10 h-10 text-stone-400 mx-auto mb-3" />
                <h3 className="text-lg font-serif font-medium text-stone-800">No matching articles found</h3>
                <p className="text-sm text-stone-500 mt-1 max-w-sm mx-auto">
                  Try adjusting your search terms or clearing the category filter to explore all 10 stories.
                </p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="mt-4 px-4 py-2 text-xs bg-stone-900 text-white rounded-md hover:bg-stone-800"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <PostCard
                    key={post.slug}
                    post={post}
                    isSaved={savedSlugs.includes(post.slug)}
                    onToggleBookmark={(e) => toggleBookmark(e, post.slug)}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Default Front-Page Editorial Broadsheet 3-Tier Layout */
          <>
            {/* FEATURED SEO RECIPES SECTION: 3 Primary Recipes with clean lowercase URLs */}
            <section className="border-b border-stone-200 pb-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">
                    Essential Kitchen Catalog
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 mt-1">
                    Featured Quick Recipes & Dinner Ideas
                  </h2>
                </div>
                <Link
                  to="/recipes"
                  className="text-xs font-semibold text-stone-800 hover:text-stone-950 underline underline-offset-4"
                >
                  Explore our complete collection of easy homemade dinner recipes →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BLOG_POSTS.slice(0, 3).map((post) => (
                  <article
                    key={post.slug}
                    className="group flex flex-col justify-between bg-white rounded-xl border border-stone-200/90 overflow-hidden shadow-2xs hover:shadow-sm transition-all"
                  >
                    <div>
                      <Link to={post.customPath || `/recipes/${post.slug}`} className="block relative aspect-16/10 overflow-hidden bg-stone-100">
                        <ImageWithFallback
                          src={post.heroImage}
                          alt={post.imageAlt || post.title}
                          fallbackTitle={post.title}
                          className="group-hover:scale-104 transition-transform duration-500 object-cover"
                          containerClassName="w-full h-full"
                        />
                      </Link>

                      <div className="p-5 space-y-2.5">
                        <div className="flex items-center gap-1.5 text-xs text-stone-500">
                          <span>{post.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{post.prepTime} prep</span>
                          <span aria-hidden="true">·</span>
                          <span>{post.cookTime} cook</span>
                        </div>

                        <Link to={post.customPath || `/recipes/${post.slug}`} className="block">
                          <h3 className="font-serif text-xl font-medium text-stone-900 leading-snug group-hover:text-stone-700 transition-colors">
                            {post.title}
                          </h3>
                        </Link>

                        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                          {post.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="font-mono text-stone-400 text-[11px] truncate max-w-[170px]">
                        {post.customPath || `/recipes/${post.slug}`}
                      </span>
                      <Link
                        to={post.customPath || `/recipes/${post.slug}`}
                        className="font-semibold text-stone-900 hover:text-stone-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>View Recipe</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* AEO (Answer Engine Optimization) Direct Questions & Answer-First Section */}
            <section className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-10 shadow-2xs">
              <div className="max-w-3xl">
                <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">
                  Kitchen FAQ & Culinary Guidance
                </span>
                <div className="mt-6 space-y-8">
                  {/* Direct Question H2 #1 */}
                  <div className="border-b border-stone-100 pb-6">
                    <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
                      What makes a quick homemade meal both nutritious and easy to prepare?
                    </h2>
                    {/* Answer-first 1-2 sentence paragraph */}
                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mt-2.5">
                      A quick homemade meal relies on pantry staple proteins, vibrant vegetables, and minimal prep cookware like a single skillet or baking sheet. By balancing lean protein with fiber-rich ingredients, you can finish a complete, nourishing dinner in under 30 minutes without culinary fatigue.
                    </p>
                    <div className="mt-3 text-xs text-stone-600">
                      <span>Related guide: </span>
                      <Link
                        to="/recipes/healthy-chicken-dinner"
                        className="font-medium text-stone-900 hover:underline"
                      >
                        Discover our quick healthy chicken dinner guide
                      </Link>
                    </div>
                  </div>

                  {/* Direct Question H2 #2 */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
                      How do you substitute ingredients without altering a recipe's flavor balance?
                    </h2>
                    {/* Answer-first 1-2 sentence paragraph */}
                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mt-2.5">
                      Substitute ingredients within the same flavor and moisture category, swapping equal ratios of acids like lemon juice for vinegar or vegetable stock for poultry broth. Matching both acidity and moisture content prevents texture disruption while preserving intended aroma.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-stone-600">
                      <span>Internal links: </span>
                      <Link
                        to="/recipes/fluffy-cheese-omelette"
                        className="font-medium text-stone-900 hover:underline"
                      >
                        Read our step-by-step guide to making a fluffy cheese omelette
                      </Link>
                      <span>·</span>
                      <Link
                        to="/recipes/vegetarian-curry"
                        className="font-medium text-stone-900 hover:underline"
                      >
                        Browse hearty vegetarian main course dishes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Curatorial Kitchen Ratio Spotlight (Chef Notebook Break) */}
            <section className="bg-stone-900 text-stone-100 rounded-2xl p-8 sm:p-10 border border-stone-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-widest font-mono">
                    <Sparkles className="w-4 h-4" />
                    <span>The Chemistry of Flavor Ratios</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white">
                    Mastering Baker's Percentages & Umami Emulsions
                  </h3>
                  <p className="text-sm text-stone-300 leading-relaxed max-w-2xl">
                    Every recipe in L’Atelier Gourmand is grounded in culinary physics. Whether balancing the 68% hydration ratio in sourdough, emulsifying pork collagen at 100°C for tonkotsu, or stopping beurre noisette with lemon juice before milk solids scorch, understanding the chemistry empowers intuitive cooking.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700/60">
                    <div className="text-xs text-stone-400 uppercase tracking-wider font-mono">Formula of the Week</div>
                    <div className="font-serif text-lg text-amber-200 mt-1">68:2.8:0.24 Dough Matrix</div>
                    <div className="text-xs text-stone-400 mt-0.5">Hydration · Salinity · Active Brewer’s Yeast</div>
                  </div>
                  <Link
                    to="/blog/sourdough-boule-mastery"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs rounded-lg transition-colors"
                  >
                    <span>Explore French Sourdough Science</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* TIER 3: The Global Archive (Remaining 6 Articles in 3-Col Grid) */}
            <section>
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200">
                <div>
                  <h3 className="text-2xl font-serif font-medium text-stone-900">
                    From Coastal Waters to Sweet Ateliers
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Royal Indian dum cooking, Northern Italian hand-rolled sfoglia, and Levantine communal feasts
                  </p>
                </div>
                <span className="text-xs font-mono text-stone-500">
                  {remainingStories.length} Curated Stories
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {remainingStories.map((post) => (
                  <PostCard
                    key={post.slug}
                    post={post}
                    isSaved={savedSlugs.includes(post.slug)}
                    onToggleBookmark={(e) => toggleBookmark(e, post.slug)}
                  />
                ))}
              </div>
            </section>

            {/* Newsletter Dispatch Box */}
            <section className="bg-stone-100 border border-stone-300/80 rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-stone-500 font-mono block mb-2">
                The Weekly Kitchen Dispatch
              </span>
              <h3 className="text-3xl font-serif font-medium text-stone-900">
                Subscribe to Seasonal Technique Monographs
              </h3>
              <p className="text-sm text-stone-600 mt-2 max-w-lg mx-auto">
                Direct to your inbox every Sunday: one deep-dive recipe breakdown, temperature science guides, and botanical spice pairings.
              </p>

              <form onSubmit={handleNewsletter} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-stone-800"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors shrink-0"
                >
                  Join Reader Circle
                </button>
              </form>

              {newsletterSuccess && (
                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-emerald-700 animate-fadeIn">
                  <Check className="w-4 h-4" />
                  <span>Welcome to L’Atelier Gourmand! You will receive the Sunday dispatch.</span>
                </div>
              )}
            </section>
          </>
        )}

      </main>
    </div>
  );
};

// Clean Reusable Post Card with zero-pill metadata
interface PostCardProps {
  post: BlogPost;
  isSaved: boolean;
  onToggleBookmark: (e: React.MouseEvent) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, isSaved, onToggleBookmark }) => {
  return (
    <article className="group flex flex-col justify-between h-full bg-white rounded-xl border border-stone-200/90 overflow-hidden shadow-2xs hover:shadow-sm transition-all duration-300">
      <div>
        {/* Card Image */}
        <Link to={`/blog/${post.slug}`} className="block relative aspect-16/10 overflow-hidden bg-stone-100">
          <ImageWithFallback
            src={post.heroImage}
            alt={post.imageAlt || post.title}
            fallbackTitle={post.title}
            className="group-hover:scale-104 transition-transform duration-500 object-cover"
            containerClassName="w-full h-full"
          />
          <button
            onClick={onToggleBookmark}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-stone-950 shadow-xs transition-colors"
            title={isSaved ? 'Remove bookmark' : 'Bookmark article'}
            aria-label="Bookmark"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-stone-900 text-stone-900' : ''}`} />
          </button>
        </Link>

        {/* Card Content */}
        <div className="p-5 space-y-2.5">
          {/* Zero-Pill Clean Metadata with typographic separators */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500">
            <span>{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTimeMinutes} min read</span>
            <span aria-hidden="true">·</span>
            <span>{post.difficulty}</span>
          </div>

          <Link to={`/blog/${post.slug}`} className="block">
            <h4 className="font-serif text-xl font-medium text-stone-900 leading-snug group-hover:text-stone-700 transition-colors">
              {post.title}
            </h4>
          </Link>

          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {post.subtitle}
          </p>
        </div>
      </div>

      {/* Card Footer with Direct Unique URL Link */}
      <div className="px-5 pb-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
        <span className="font-mono text-stone-400 text-[11px] truncate max-w-[140px]">
          /blog/{post.slug}
        </span>
        <Link
          to={`/blog/${post.slug}`}
          className="font-semibold text-stone-900 hover:text-stone-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          <span>View Article</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
