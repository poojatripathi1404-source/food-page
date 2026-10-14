import React from 'react';
import { Link } from '../router/Link';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { BLOG_POSTS } from '../data/blogPosts';
import { ArrowRight, Globe, Sparkles, BookOpen, Clock, Heart } from 'lucide-react';

export const HeritagePage: React.FC = () => {
  // Dishes to highlight with deep cultural weaving
  const featuredDishes = [
    {
      dish: 'Fluffy Cheese Omelette',
      slug: 'fluffy-cheese-omelette',
      path: '/recipes/fluffy-cheese-omelette',
      region: 'Lyon, France',
      period: '18th Century French Culinary Revolution',
      image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Golden cooked cheese omelette on a white ceramic plate with melted cheddar and fresh chives',
      narrative: 'In the kitchens of Auguste Escoffier and the Mères de Lyon, the folded omelette was not merely breakfast; it was the ultimate examination of a cook’s discipline. A candidate cook was handed three eggs, a cold carbon-steel skillet, and a knob of salted butter. To produce a golden baveuse exterior with zero browning and a molten interior required profound thermal intuition and physical economy of movement.',
      traditionNote: 'The French fold honors the humility of fresh pasture eggs, transforming simple farmhouse staples into palace gastronomy through pure technique rather than lavish expense.'
    },
    {
      dish: 'Healthy Herb Chicken Dinner',
      slug: 'healthy-chicken-dinner',
      path: '/recipes/healthy-chicken-dinner',
      region: 'Eastern Mediterranean & Levant',
      period: 'Classical Antiquity to Modern Hearth Cooking',
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Juicy seared golden herb chicken breast on an dinner plate with tender charred asparagus and lemon slices',
      narrative: 'Across the sun-drenched terraced hillsides of Greece, Lebanon, and Southern Italy, hearth-roasting pasture-raised poultry alongside wild mountain oregano, crushed garlic, and grove lemons is a ritual dating back millennia. Ancient physicians documented that combining citrus acid with bitter wild herbs and cold-pressed olive oil preserved lean meat, aided digestion, and fortified travelers against the winter winds.',
      traditionNote: 'This coastal preparation celebrates the agrarian wisdom of the Mediterranean diet: minimal processing, high protein, bitter aromatic herbs, and bright citrus that deglazes the pan into an unctuous natural jus.'
    },
    {
      dish: 'Fragrant Vegetarian Coconut Curry',
      slug: 'vegetarian-curry',
      path: '/recipes/vegetarian-curry',
      region: 'Kerala & Tamil Nadu, South Asia',
      period: '3,000 BCE Indus Valley & Ayurvedic Traditions',
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Fragrant creamy vegetarian coconut curry in a rustic stoneware bowl garnished with fresh cilantro and lime',
      narrative: 'Long before modern nutrition science mapped macronutrients, ancient Vedic kitchens codified the six rasas (tastes) and thermal properties of food. The practice of "tadka"—blooming whole mustard seeds, cumin, and golden turmeric in pure coconut oil—was devised not only to perfume the village air but to dissolve fat-soluble curcumin so the body could absorb its healing benefits alongside protein-rich legumes and seasonal brassicas.',
      traditionNote: 'In South Asian domestic life, curry is an act of communal devotion (annadana), where legumes, fresh coconut, and market vegetables are stewed slowly to nourish both the body and the spirit.'
    },
    {
      dish: 'Fluffy Buttermilk Skillet Pancakes',
      slug: 'fluffy-buttermilk-pancakes',
      path: '/recipes/fluffy-buttermilk-pancakes',
      region: 'American Frontier & Early Homesteads',
      period: '19th Century Hearth & Chuckwagon Culture',
      image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Tall stack of golden fluffy buttermilk pancakes with melting butter and pure maple syrup',
      narrative: 'On the early American frontier, nothing was wasted. When butter was churned from fresh farm milk, the remaining tangy, acidic liquid was carefully cultured to preserve it through harsh seasons. Homestead cooks combined this fermented buttermilk with wood-ash lye or early saleratus (baking soda), generating natural carbonation that transformed coarse grain flour into towering, tender griddlecakes that fueled long days of physical labor.',
      traditionNote: 'Today’s golden stacks carry forward that homestead ethic of frugality and ingenious chemistry, proving that humble fermented dairy and cast-iron heat yield enduring comfort.'
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Editorial Masthead */}
      <section className="border-b border-stone-200 pt-10 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-mono mb-3">
          <Globe className="w-3.5 h-3.5" />
          <span>Ancestral Kitchens · Cultural Anthropology · Food Origins</span>
        </div>
        
        {/* Single H1 Tag */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium text-stone-900 tracking-tight leading-tight">
          The Living Heritage: Cultural Origins & Culinary Ancestry
        </h1>
        
        <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-3xl mx-auto font-serif italic leading-relaxed">
          Every recipe we prepare today carries centuries of survival, celebration, and communal craft. Explore the four-millennium journey of our signature kitchen dishes.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-stone-600">
          <Link
            to="/recipes"
            className="text-stone-900 underline underline-offset-4 hover:text-stone-700"
          >
            Explore our complete collection of easy homemade dinner recipes →
          </Link>
          <span>·</span>
          <Link
            to="/techniques"
            className="text-stone-900 underline underline-offset-4 hover:text-stone-700"
          >
            Master essential cooking techniques with step-by-step guidance →
          </Link>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Detailed 4-5 Paragraph Storytelling Section */}
        <article className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-12 shadow-2xs space-y-7">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-mono block">
              Historical Retrospective
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 mt-1">
              How Ancestral Fires Shaped the Everyday Flavors of Modern Food
            </h2>
          </div>

          <div className="space-y-6 text-stone-800 text-base sm:text-lg leading-relaxed font-sans">
            {/* Paragraph 1 */}
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900">
              Food is humanity’s most intimate and enduring archival record. Long before recipes were recorded in printed manuscripts or digital screens, culinary knowledge was transferred through muscle memory, song, and the sensory cadence of the kitchen. When we crack an egg into foaming butter or hear whole cumin seeds pop in hot oil, we are participating in an unbroken lineage that spans continents and epochs. Every contemporary dish on our tables is a living descendant of ancestral strategies designed to preserve seasonal bounties, honor communal gatherings, and extract deep nourishment from simple soil and sun.
            </p>

            {/* Paragraph 2 */}
            <p>
              In eighteenth-century France, as cooking transitioned from royal court extravagance to civic craft, the humble egg emerged as the supreme crucible of culinary discipline. In the bustling bistros of Lyon and Paris, the classic cheese omelette was canonized not because it was ostentatious, but because it exposed whether a chef possessed absolute mastery over heat, timing, and emulsion. There was nowhere to hide behind heavy sauces or rare game; two eggs, salt, and pasture butter demanded that the cook surrender rushing and understand protein physics in its purest, most delicate state.
            </p>

            {/* Paragraph 3 */}
            <p>
              Thousands of miles to the east, along the ancient trade routes of the Indian subcontinent, culinary history was intertwined with Ayurvedic holistic balance. In these tropical coastal kitchens, the sacred ritual of spice blooming—known as tadka or chhonk—was perfected over three millennia. Ground turmeric, coriander, and black mustard seeds were never boiled raw; they were awakened in cold-pressed coconut oil or ghee to dissolve fat-soluble essential oils. When blended with protein-rich chickpeas, earthy cauliflower, and fresh leafy greens, this aromatic broth became a celebration of seasonal vegetarian stewardship and physiological well-being.
            </p>

            {/* Paragraph 4 */}
            <p>
              Simultaneously, across the rocky hillsides of the Mediterranean basin, shepherds and agrarian families turned the preparation of roasted poultry into an emblem of communal hospitality. Wild thyme and oregano harvested from rocky slopes were crushed with garlic cloves and coarse sea salt to form an ancient dry rub that protected the meat from spoiling in warm weather. Searing the fowl in olive oil and squeezing freshly plucked orchard lemons into the hot embers produced a savory, restorative elixir that sustained generations through long winters and celebrated the bounty of the harvest table.
            </p>

            {/* Paragraph 5 */}
            <p>
              Finally, on the vast homestead frontiers of early North America, culinary ingenuity was born from strict seasonal economy. Pioneers carrying iron skillets into the wilderness learned that the sour, fermented buttermilk remaining from weekly butter churning contained natural lactic acids capable of reacting vigorously with baking soda. The resulting griddlecakes rose tall and pillowy over wood fires, transforming heavy grain rations into golden discs of comfort. Today, when we flip a stack of buttermilk pancakes, we are tasting that very same spirit of homestead resourcefulness and morning celebration that has sustained home cooks for hundreds of years.
            </p>
          </div>
        </article>

        {/* AEO (Answer Engine Optimization) Direct Questions & Answer-First Section */}
        <section className="bg-stone-50 border border-stone-200 rounded-2xl p-8 sm:p-10">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">
              Cultural Q&A & Historical Insights
            </span>
            <div className="mt-6 space-y-8">
              
              {/* Direct Question H2 #1 */}
              <div className="border-b border-stone-200 pb-6">
                <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
                  Why did the simple folded omelette become the ultimate test of a chef's skill?
                </h2>
                {/* Answer-first 1-2 sentence paragraph */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mt-2.5">
                  The French folded omelette became the universal test of a chef because its minimal ingredients provide zero room to mask technical errors in heat control and egg protein coagulation. In under two minutes, an examiner can instantly judge a cook's pan dexterity, fork agility, and thermal restraint by whether the exterior is silky pale gold without brown scorch marks and the interior remains molten and velvety.
                </p>
                <div className="mt-3 text-xs text-stone-600">
                  <span>Related recipe: </span>
                  <Link
                    to="/recipes/fluffy-cheese-omelette"
                    className="font-medium text-stone-900 underline hover:text-stone-700"
                  >
                    Read our step-by-step guide to making a fluffy cheese omelette
                  </Link>
                </div>
              </div>

              {/* Direct Question H2 #2 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
                  What is the ancient cultural origin of blooming spices in curry?
                </h2>
                {/* Answer-first 1-2 sentence paragraph */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mt-2.5">
                  The ancient practice of blooming spices—known historically as tadka or baghar in South Asian Ayurvedic cooking—originated over 3,000 years ago as both a culinary technique and medicinal practice. Heating whole and ground spices in warm oil or ghee dissolves fat-soluble compounds like curcumin and volatile terpenes that water cannot release, unlocking maximum aroma and facilitating digestion.
                </p>
                <div className="mt-3 text-xs text-stone-600">
                  <span>Related recipe: </span>
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

        {/* Featured Dish Heritage Profiles */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">
              From Hearth to Modern Table
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-medium text-stone-900 mt-1">
              Cultural Profiles of Our Featured Recipes
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Every dish on our site is deeply rooted in authentic geographic origins and generational craftsmanship.
            </p>
          </div>

          <div className="space-y-8">
            {featuredDishes.map((item, idx) => (
              <article
                key={item.slug}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-0"
              >
                <div className="md:col-span-5 relative aspect-16/10 md:aspect-auto overflow-hidden bg-stone-100">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.imageAlt}
                    fallbackTitle={item.dish}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded">
                    {item.region}
                  </div>
                </div>

                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs text-stone-500 font-mono uppercase tracking-wider">
                      {item.period}
                    </div>
                    <h3 className="text-2xl font-serif font-medium text-stone-900">
                      {item.dish}
                    </h3>
                    <p className="text-stone-700 text-sm leading-relaxed">
                      {item.narrative}
                    </p>
                    <div className="p-3.5 bg-stone-50 border-l-2 border-stone-800 rounded-r text-xs text-stone-600 italic">
                      <span className="font-semibold text-stone-800 not-italic">Ancestral Tradition: </span>
                      {item.traditionNote}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-stone-400 font-mono">
                      {item.path}
                    </span>
                    <Link
                      to={item.path}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-stone-600 group"
                    >
                      <span>Explore this recipe and its cooking steps</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Curatorial Heritage Note */}
        <section className="bg-stone-900 text-stone-100 rounded-2xl p-8 sm:p-10 border border-stone-800 text-center max-w-3xl mx-auto">
          <BookOpen className="w-8 h-8 text-amber-400 mx-auto mb-3" />
          <h3 className="text-2xl font-serif font-medium text-white">
            Honoring Tradition in the Modern Home Kitchen
          </h3>
          <p className="text-sm text-stone-300 mt-2 max-w-xl mx-auto leading-relaxed">
            By honoring the cultural origins and historical techniques behind our food, we transform routine dinner prep into a celebration of human wisdom, craftsmanship, and connection.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/recipes"
              className="px-5 py-2.5 bg-white text-stone-900 rounded-lg text-xs font-medium hover:bg-stone-100 transition-colors"
            >
              Explore our complete collection of easy homemade dinner recipes
            </Link>
            <Link
              to="/techniques"
              className="px-5 py-2.5 bg-stone-800 text-stone-200 border border-stone-700 rounded-lg text-xs font-medium hover:bg-stone-700 transition-colors"
            >
              Master essential cooking techniques with step-by-step guidance
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
