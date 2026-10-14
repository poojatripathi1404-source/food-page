import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogPosts';
import { Link } from '../router/Link';
import { useRouter } from '../router/router';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { ServingsScaler } from '../components/ServingsScaler';
import { CookingTimer } from '../components/CookingTimer';
import { CommentsSection } from '../components/CommentsSection';
import { UniqueUrlBar } from '../components/UniqueUrlBar';
import {
  Clock,
  Flame,
  Globe,
  Printer,
  Bookmark,
  ArrowLeft,
  CheckCircle2,
  Wine,
  Sparkles,
  Award,
  ChevronRight,
  Share2
} from 'lucide-react';

interface BlogDetailPageProps {
  slug: string;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  const [isSaved, setIsSaved] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [activeTimerMinutes, setActiveTimerMinutes] = useState<number | null>(null);
  const [activeTimerLabel, setActiveTimerLabel] = useState<string>('Kitchen Timer');

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('culinary_bookmarks') || '[]');
      setIsSaved(saved.includes(slug));
    } catch {
      setIsSaved(false);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-serif text-stone-900 mb-4">Article Not Found</h1>
        <p className="text-stone-600 mb-8">
          The requested culinary story could not be located at the URL <code className="bg-stone-100 px-2 py-1 rounded">/blog/{slug}</code>.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-stone-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Journal Home</span>
        </Link>
      </div>
    );
  }

  const toggleBookmark = () => {
    try {
      const saved: string[] = JSON.parse(localStorage.getItem('culinary_bookmarks') || '[]');
      const next = saved.includes(slug) ? saved.filter(s => s !== slug) : [...saved, slug];
      localStorage.setItem('culinary_bookmarks', JSON.stringify(next));
      setIsSaved(!isSaved);
      window.dispatchEvent(new Event('bookmark-updated'));
    } catch {
      setIsSaved(!isSaved);
    }
  };

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps(prev => ({ ...prev, [stepNumber]: !prev[stepNumber] }));
  };

  const startTimerForStep = (minutes: number, title: string) => {
    setActiveTimerMinutes(minutes);
    setActiveTimerLabel(`${title} (${minutes}m)`);
  };

  const handlePrint = () => {
    window.print();
  };

  // 3 Related Articles (excluding current)
  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <article className="min-h-screen pb-24">
      
      {/* Top Utility & Unique URL Bar */}
      <div className="bg-stone-100/60 border-b border-stone-200 py-3 no-print">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2.5">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-950 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Journal Front Page</span>
            </Link>

            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 rounded transition-colors"
                title="Print recipe without browser clutter"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print Mode</span>
              </button>

              <button
                onClick={toggleBookmark}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
                  isSaved
                    ? 'bg-stone-900 text-stone-50'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
                title="Save this story to reading list"
              >
                <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                <span>{isSaved ? 'Saved' : 'Save Story'}</span>
              </button>
            </div>
          </div>

          {/* Prominent Unique URL Card (verifying requirements) */}
          <UniqueUrlBar slug={post.slug} title={post.title} />
        </div>
      </div>

      {/* Hero Header Presentation */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 text-center">
        
        {/* Zero-Pill Clean Typographic Metadata */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-mono mb-4">
          <span>{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.origin}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTimeMinutes} min read</span>
          <span aria-hidden="true">·</span>
          <span>{post.difficulty}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium text-stone-900 leading-tight">
          {post.title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto font-serif italic leading-relaxed">
          {post.subtitle}
        </p>

        {/* Author Byline & Date */}
        <div className="mt-8 pt-6 border-t border-stone-200/70 inline-flex items-center gap-4 text-left">
          <div className="w-11 h-11 rounded-full bg-stone-800 text-stone-100 flex items-center justify-center font-serif text-lg font-bold shrink-0">
            {post.author.name.charAt(0)}
          </div>
          <div className="text-xs">
            <span className="font-semibold text-stone-900 block text-sm">{post.author.name}</span>
            <span className="text-stone-500">{post.author.role} · {post.publishedDate}</span>
          </div>
        </div>
      </header>

      {/* Hero Image Presentation with Figure Caption */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <div className="relative aspect-16/9 rounded-2xl overflow-hidden shadow-sm border border-stone-200 bg-stone-100">
          <ImageWithFallback
            src={post.heroImage}
            alt={post.imageAlt || post.title}
            fallbackTitle={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="text-xs font-serif text-stone-500 italic mt-3 text-center">
          {post.imageCaption}
        </figcaption>
      </div>

      {/* Quick Kitchen KPI Strip */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white border border-stone-200 rounded-xl shadow-2xs text-center font-sans">
          <div className="p-2 border-r border-stone-100 last:border-none">
            <span className="text-xs text-stone-400 uppercase tracking-wider block font-mono">Prep Time</span>
            <span className="text-base font-semibold text-stone-900 mt-0.5 block">{post.prepTime}</span>
          </div>
          <div className="p-2 border-r border-stone-100 last:border-none">
            <span className="text-xs text-stone-400 uppercase tracking-wider block font-mono">Cook Time</span>
            <span className="text-base font-semibold text-stone-900 mt-0.5 block">{post.cookTime}</span>
          </div>
          <div className="p-2 border-r border-stone-100 last:border-none">
            <span className="text-xs text-stone-400 uppercase tracking-wider block font-mono">Yield Base</span>
            <span className="text-base font-semibold text-stone-900 mt-0.5 block">{post.servingsBase} Servings</span>
          </div>
          <div className="p-2">
            <span className="text-xs text-stone-400 uppercase tracking-wider block font-mono">Level</span>
            <span className="text-base font-semibold text-stone-900 mt-0.5 block">{post.difficulty}</span>
          </div>
        </div>
      </div>

      {/* Main Two-Column Asymmetric Content Grid (70% Reading & Method / 30% Kitchen Utility) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Column (8 cols): Narrative, Science, Steps */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Opening Narrative with Drop Cap */}
            <section className="space-y-4 text-stone-800 text-base sm:text-lg leading-relaxed font-sans">
              {post.introProse.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900' : ''}
                >
                  {paragraph}
                </p>
              ))}
            </section>

            {/* AEO (Answer Engine Optimization) Direct Questions & Answer-First Paragraphs */}
            {post.aeoQuestions && post.aeoQuestions.length > 0 && (
              <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-7 shadow-2xs space-y-6">
                <div className="text-xs uppercase tracking-widest text-stone-500 font-mono font-semibold">
                  Chef Q&A · Essential Technique Secrets
                </div>
                {post.aeoQuestions.map((qa, idx) => (
                  <div key={idx} className={idx > 0 ? "pt-5 border-t border-stone-100" : ""}>
                    <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900 leading-snug">
                      {qa.question}
                    </h2>
                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans mt-2">
                      {qa.answer}
                    </p>
                  </div>
                ))}
              </section>
            )}

            {/* Internal Navigation Links with Descriptive Anchor Text */}
            {post.internalLinks && post.internalLinks.length > 0 && (
              <section className="bg-stone-100/70 border border-stone-200/80 rounded-xl p-6 space-y-3">
                <div className="text-xs uppercase tracking-widest text-stone-500 font-mono font-semibold">
                  Related Recipe Guides & Recommendations
                </div>
                <ul className="space-y-2.5 text-sm text-stone-700">
                  {post.internalLinks.map((link, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-stone-400 font-mono">›</span>
                      <span>
                        {link.context}
                        <Link
                          to={link.url}
                          className="font-medium text-stone-900 underline hover:text-stone-700"
                        >
                          {link.anchorText}
                        </Link>
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Culinary Science Card */}
            <section className="bg-stone-900 text-stone-100 p-6 sm:p-7 rounded-xl border border-stone-800 space-y-2.5">
              <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-widest font-mono">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Culinary Physics & Molecular Science</span>
              </div>
              <h3 className="text-xl font-serif font-medium text-white">
                {post.culinaryScience.headline}
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                {post.culinaryScience.explanation}
              </p>
            </section>

            {/* Method: Step-by-Step Interactive Kitchen Guide */}
            <section className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <h3 className="text-2xl font-serif font-medium text-stone-900">
                  Step-by-Step Method
                </h3>
                <span className="text-xs text-stone-500 font-mono">
                  {Object.values(completedSteps).filter(Boolean).length}/{post.steps.length} Steps Complete
                </span>
              </div>

              <div className="space-y-6">
                {post.steps.map((step) => {
                  const isDone = !!completedSteps[step.stepNumber];
                  return (
                    <div
                      key={step.stepNumber}
                      className={`p-5 rounded-xl border transition-all duration-300 ${
                        isDone
                          ? 'bg-stone-50/70 border-stone-200 opacity-60'
                          : 'bg-white border-stone-200 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2.5">
                          <button
                            onClick={() => toggleStep(step.stepNumber)}
                            className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-semibold shrink-0 transition-colors ${
                              isDone
                                ? 'bg-emerald-700 text-white'
                                : 'bg-stone-100 text-stone-800 border border-stone-300 hover:bg-stone-200'
                            }`}
                            aria-label={`Mark step ${step.stepNumber} as complete`}
                          >
                            {isDone ? <CheckCircle2 className="w-4 h-4" /> : step.stepNumber}
                          </button>
                          <h4 className={`text-base font-semibold text-stone-900 ${isDone ? 'line-through text-stone-500' : ''}`}>
                            {step.title}
                          </h4>
                        </div>

                        {step.durationMinutes && (
                          <button
                            onClick={() => startTimerForStep(step.durationMinutes!, step.title)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded border border-stone-200/80 transition-colors shrink-0"
                            title={`Start ${step.durationLabel} timer for this step`}
                          >
                            <Clock className="w-3 h-3 text-stone-500" />
                            <span>{step.durationLabel}</span>
                          </button>
                        )}
                      </div>

                      <p className="text-sm text-stone-700 leading-relaxed pl-8">
                        {step.description}
                      </p>

                      {step.keyTechnique && (
                        <div className="mt-3 pl-8 text-xs text-stone-500 font-serif italic border-l-2 border-stone-300 ml-1">
                          Key nuance: {step.keyTechnique}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Chef Pro Tips */}
            <section className="bg-stone-100/80 rounded-xl p-6 border border-stone-200/90 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-600 font-mono font-semibold">
                <Award className="w-4 h-4 text-stone-800" />
                <span>Chef's Masterclass Secrets</span>
              </div>
              <ul className="space-y-2 text-sm text-stone-700">
                {post.proTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-stone-400 font-serif font-bold text-base leading-none">·</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Sidebar Column (5 cols): Ingredients Scaler, Timer, Wine, Equipment */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Interactive Servings Scaler */}
            <ServingsScaler
              ingredients={post.ingredients}
              baseServings={post.servingsBase}
            />

            {/* Active Kitchen Timer Widget */}
            <div className="no-print">
              <CookingTimer
                initialMinutes={activeTimerMinutes || 15}
                label={activeTimerLabel}
              />
            </div>

            {/* Sommelier Wine & Beverage Pairing */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-mono">
                <Wine className="w-4 h-4 text-stone-700" />
                <span>Sommelier Cellar Pairing</span>
              </div>
              <h4 className="font-serif text-lg font-medium text-stone-900">
                {post.winePairing.beverage}
              </h4>
              <p className="text-xs font-mono text-stone-500">
                {post.winePairing.vintageOrRegion}
              </p>
              <p className="text-xs text-stone-600 leading-relaxed pt-1">
                {post.winePairing.tastingNote}
              </p>
            </div>

            {/* Essential Equipment Box */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2.5">
              <h4 className="text-xs uppercase tracking-widest text-stone-500 font-mono font-semibold">
                Essential Kitchen Tools
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-700">
                {post.equipment.map((tool, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-stone-400 font-mono">›</span>
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutritional Profile Card */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-xs space-y-2">
              <div className="text-xs uppercase tracking-widest text-stone-500 font-mono font-semibold">
                Nutritional Breakdown (Per Serving)
              </div>
              <div className="grid grid-cols-4 gap-2 pt-1 font-mono text-center">
                <div className="bg-white p-2 rounded border border-stone-200">
                  <div className="text-stone-400 text-[10px]">Calories</div>
                  <div className="font-bold text-stone-900 mt-0.5">{post.nutrition.calories}</div>
                </div>
                <div className="bg-white p-2 rounded border border-stone-200">
                  <div className="text-stone-400 text-[10px]">Protein</div>
                  <div className="font-bold text-stone-900 mt-0.5">{post.nutrition.protein}</div>
                </div>
                <div className="bg-white p-2 rounded border border-stone-200">
                  <div className="text-stone-400 text-[10px]">Carbs</div>
                  <div className="font-bold text-stone-900 mt-0.5">{post.nutrition.carbs}</div>
                </div>
                <div className="bg-white p-2 rounded border border-stone-200">
                  <div className="text-stone-400 text-[10px]">Fat</div>
                  <div className="font-bold text-stone-900 mt-0.5">{post.nutrition.fat}</div>
                </div>
              </div>
            </div>

            {/* Article Tags */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-mono block mb-2">
                Article Tags
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-stone-600">
                {post.tags.map(tag => (
                  <span key={tag} className="font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Reader Comments Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <CommentsSection postSlug={post.slug} />
      </div>

      {/* Related Stories Bar */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-stone-200 no-print">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-serif text-2xl font-medium text-stone-900">
            More From L’Atelier Gourmand
          </h3>
          <Link to="/" className="text-xs font-semibold text-stone-700 hover:text-stone-950">
            All 10 Stories →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map(rel => (
            <Link
              key={rel.slug}
              to={`/blog/${rel.slug}`}
              className="group block bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-xs transition-all"
            >
              <div className="aspect-16/10 overflow-hidden bg-stone-100">
                <ImageWithFallback
                  src={rel.heroImage}
                  alt={rel.imageAlt || rel.title}
                  fallbackTitle={rel.title}
                  className="group-hover:scale-104 transition-transform duration-500 object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
              <div className="p-4 space-y-1.5">
                <div className="text-[11px] font-mono text-stone-500 uppercase">
                  {rel.category} · {rel.readTimeMinutes} min
                </div>
                <h4 className="font-serif text-lg font-medium text-stone-900 leading-snug group-hover:text-stone-700 line-clamp-2">
                  {rel.title}
                </h4>
                <div className="text-xs font-mono text-stone-400 pt-1">
                  /blog/{rel.slug}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </article>
  );
};
