import React from 'react';
import { Link } from '../router/Link';
import { ChefHat, BookOpen, Flame, Compass, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 min-h-screen">
      
      {/* Header */}
      <div className="text-center pb-10 border-b border-stone-200">
        <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">
          The Curatorial Manifesto
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-medium text-stone-900 mt-2">
          About L’Atelier Gourmand
        </h1>
        <p className="mt-4 text-stone-600 max-w-xl mx-auto font-serif italic text-lg leading-relaxed">
          "Cooking is where ancestral memory, botanical chemistry, and generous hospitality meet."
        </p>
      </div>

      {/* Narrative Essay */}
      <div className="py-12 space-y-8 text-stone-800 text-base sm:text-lg leading-relaxed font-sans">
        <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900">
          Founded in the autumn of 2026, L’Atelier Gourmand was established as a deliberate counterweight to ephemeral, algorithm-driven food media. We believe that a true recipe is not a 15-second visual stunt, but an intimate dialogue with time, temperature, and provenance.
        </p>
        <p>
          Every article published within our journal is rigorously tested across real hearths, gas stoves, and wood ovens. We don't conceal failures or gloss over difficult stages; whether that is the delicate 450°C thermal shock necessary to puff an authentic Neapolitan cornicione, or the mechanical violence required to emulsify pork marrow into milky Hakata tonkotsu broth.
        </p>
      </div>

      {/* The 4 Curatorial Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-2">
          <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800 mb-3">
            <Flame className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-xl font-medium text-stone-900">1. Thermal Truth</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            We document the physics behind cooking: Maillard reactions, collagen hydrolysis, and moisture barriers that dictate crunch and tenderness.
          </p>
        </div>

        <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-2">
          <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800 mb-3">
            <Compass className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-xl font-medium text-stone-900">2. Regional Provenance</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Honoring origin matters. From Oaxacan chilhuacle chiles to San Marzano tomatoes harvested under Mount Vesuvius, we respect local terroir.
          </p>
        </div>

        <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-2">
          <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800 mb-3">
            <BookOpen className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-xl font-medium text-stone-900">3. Baker’s Scalability</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Every formula is provided in precise gram measurements and baker’s percentages, dynamically scalable for intimate dinners or lavish banquets.
          </p>
        </div>

        <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-2">
          <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800 mb-3">
            <ChefHat className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-xl font-medium text-stone-900">4. Community Craft</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Our readers participate as co-researchers, leaving notes, baking adjustments, and sommelier pairing recommendations.
          </p>
        </div>
      </div>

      {/* CTA back to stories */}
      <div className="mt-12 text-center p-8 bg-stone-100 rounded-xl border border-stone-200">
        <h3 className="font-serif text-2xl font-medium text-stone-900 mb-2">
          Begin Your Culinary Exploration
        </h3>
        <p className="text-xs text-stone-600 mb-5 max-w-sm mx-auto">
          Explore all 10 in-depth articles published in our current volume.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
        >
          <span>Explore Front Page</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
};
