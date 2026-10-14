import React, { useState } from 'react';
import { Link } from '../router/Link';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { ArrowRight, Flame, Thermometer, Clock, Sparkles, ChefHat, CheckCircle2, ChevronRight } from 'lucide-react';

interface TechniqueGuide {
  title: string;
  category: string;
  steps: string[];
  visualCue: string;
  tempBenchmark: string;
  proTip: string;
}

interface RecipeTechniques {
  recipeTitle: string;
  recipePath: string;
  recipeSlug: string;
  heroImage: string;
  imageAlt: string;
  summary: string;
  techniques: [TechniqueGuide, TechniqueGuide];
}

export const TechniquesPage: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<string>('all');

  const recipeTechniqueCatalog: RecipeTechniques[] = [
    {
      recipeTitle: 'Fluffy Cheese Omelette Recipe',
      recipePath: '/recipes/fluffy-cheese-omelette',
      recipeSlug: 'fluffy-cheese-omelette',
      heroImage: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Golden cooked cheese omelette on a white plate with melted cheddar and fresh chives',
      summary: 'Achieving an ethereal, cloud-like cheese omelette requires mastering mechanical egg protein aeration and delicate thermal heat management.',
      techniques: [
        {
          title: 'Technique 1: High-Frequency Fork Aeration (Kinetic Micro-Bubbling)',
          category: 'Preparation & Whipping Method',
          steps: [
            'Break room-temperature eggs into a wide, shallow ceramic or glass mixing bowl to maximize surface area.',
            'Angle your dinner fork or balloon whisk at 45 degrees and whip in rapid, circular strokes for a full 60 seconds.',
            'Watch for the albumen strands to completely liquefy, producing a uniform pale-yellow foam with thousands of tiny micro-bubbles.',
            'Season with fine sea salt only immediately before pan entry, preventing salt from pre-coagulating delicate proteins.'
          ],
          visualCue: 'The mixture should coat the back of a spoon smoothly with zero stringy albumen ropes visible.',
          tempBenchmark: 'Room temperature eggs (68°F / 20°C) incorporate 30% more air than refrigerator-cold eggs.',
          proTip: 'Never add dairy milk or water; liquid dairy dilutes egg proteins and causes weeping (syneresis) during cooking.'
        },
        {
          title: 'Technique 2: Low-Heat Curd Dragging & Seamless French Roll',
          category: 'Pan Cooking & Folding Method',
          steps: [
            'Heat a heavy 8-inch non-stick skillet over medium-low heat. Add European butter and wait for it to foam without browning.',
            'Pour in whipped eggs; allow the bottom layer to gently set undisturbed for exactly 15 seconds.',
            'Using a flexible silicone spatula, push cooked outer curds inward toward the center while tilting the pan to let raw liquid run onto the hot perimeter.',
            'When the surface is soft and glossy (baveuse), remove skillet from heat, sprinkle freshly grated cheese across the center, and roll gently onto a warm plate seam-side down.'
          ],
          visualCue: 'A glossy custard top that jiggles slightly when the pan is shaken, with zero browned spots on the bottom.',
          tempBenchmark: 'Internal egg curd sets at 145°F–150°F (63°C–66°C); residual heat will finish melting the cheese off the flame.',
          proTip: 'Warm your serving plate in a low oven before rolling; a cold plate instantly chills melted cheese into a solid paste.'
        }
      ]
    },
    {
      recipeTitle: 'Healthy Chicken Recipe for Dinner',
      recipePath: '/recipes/healthy-chicken-dinner',
      recipeSlug: 'healthy-chicken-dinner',
      heroImage: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Juicy seared golden herb chicken breast on an elegant dinner plate with tender charred asparagus and lemon slices',
      summary: 'Transform lean chicken breast into succulent, restaurant-grade dinners through calibrated pounding and sear-to-rest thermal management.',
      techniques: [
        {
          title: 'Technique 1: Mechanical Gauging & Surface Moisture Extraction',
          category: 'Preparation & Tenderization Method',
          steps: [
            'Place boneless skinless chicken breasts between two sturdy sheets of parchment paper or plastic wrap.',
            'Using the flat face of a meat mallet or a heavy rolling pin, gently strike the thicker half of each breast with radiating strokes from the center outward.',
            'Calibrate the meat to a uniform 1/2-inch (1.2 cm) thickness across its entire length.',
            'Remove wrap and blot both sides thoroughly with dry paper towels until the exterior surface is completely dry to the touch.'
          ],
          visualCue: 'The meat should be flat and even with a matte, non-glossy surface ready to take a spice rub.',
          tempBenchmark: 'Uniform 1/2-inch thickness ensures the thin tapered end finishes cooking at the exact same second as the core.',
          proTip: 'Moisture on the surface of meat causes steam boiling instead of the golden Maillard crust; drying is mandatory.'
        },
        {
          title: 'Technique 2: High-Thermal Sear & Carryover Rest Equilibrium',
          category: 'Searing & Pan Roasting Method',
          steps: [
            'Preheat a heavy stainless steel or cast-iron skillet over medium-high heat with extra virgin olive oil until shimmering.',
            'Lay seasoned chicken breasts gently into the pan away from your body to prevent hot oil splatters.',
            'Sear undisturbed for 4 to 5 minutes without poking, shaking, or lifting until a deep golden crust releases freely.',
            'Flip once, cook for 3 to 4 minutes until internal thermometer reaches 160°F (71°C), transfer to a cutting board, and tent loosely with foil for 5 minutes.'
          ],
          visualCue: 'The chicken will naturally release from the pan surface once the crust has properly caramelized.',
          tempBenchmark: 'Pull at 160°F (71°C); carryover cooking during resting will gently push the internal temperature to a safe 165°F (74°C).',
          proTip: 'Deglaze the caramelized pan drippings (fond) with freshly squeezed lemon juice to yield an instant pan jus.'
        }
      ]
    },
    {
      recipeTitle: 'Vegetarian Curry Recipe',
      recipePath: '/recipes/vegetarian-curry',
      recipeSlug: 'vegetarian-curry',
      heroImage: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Fragrant creamy vegetarian coconut curry in a rustic stoneware bowl garnished with fresh cilantro and lime',
      summary: 'Building profound aromatic depth in plant-based curries relies on blooming spices in hot oil and staged vegetable texture simmering.',
      techniques: [
        {
          title: 'Technique 1: Tadka (Whole & Ground Spice Lipid Blooming)',
          category: 'Aromatic Extraction Method',
          steps: [
            'Warm virgin coconut oil in a wide, heavy-bottomed Dutch oven or saute pan over medium heat until fragrant.',
            'Introduce minced ginger, garlic paste, and finely diced yellow onions; sweat gently for 4 minutes until translucent.',
            'Add ground turmeric, cumin, cracked coriander seeds, and mild chili flakes directly into the hot oil pool.',
            'Stir constantly with a wooden spoon for 30 to 45 seconds until spices release an intense, toasted aromatic bouquet.'
          ],
          visualCue: 'The oil turns a rich golden-amber color with tiny bubbles dancing around the spice particulates.',
          tempBenchmark: 'Keep oil around 300°F–320°F (150°C–160°C); any hotter will scorch ground spices into bitter charcoal.',
          proTip: 'Turmeric curcumin and cumin terpenes are hydrophobic; dissolving them in oil extracts 400% more flavor than boiling in water.'
        },
        {
          title: 'Technique 2: Staged Emulsion Simmering & Chlorophyll Preservation',
          category: 'Simmering & Vegetable Staging Method',
          steps: [
            'Deglaze the bloomed spices with crushed tomatoes, scraping the bottom of the pan to capture all caramelized aromatics.',
            'Pour in full-fat coconut milk and whisk gently to establish a stable, velvety emulsion before bringing to a simmer.',
            'Add dense cauliflower florets and cooked chickpeas; cover with a tight-fitting lid and simmer for 8 to 10 minutes until tender.',
            'Remove the lid, stir in baby spinach leaves off the direct flame, and fold gently for 90 seconds until wilted.'
          ],
          visualCue: 'Cauliflower yields cleanly to a paring knife while spinach ribbons stay brilliant emerald green.',
          tempBenchmark: 'Maintain a gentle simmer at 195°F–200°F (90°C–93°C); a rolling boil will break the coconut milk fat emulsion.',
          proTip: 'Always add delicate greens off the direct heat; excess boiling destroys heat-sensitive vitamin C and turns leaves dull olive brown.'
        }
      ]
    },
    {
      recipeTitle: 'Fluffy Buttermilk Pancakes Recipe',
      recipePath: '/recipes/fluffy-buttermilk-pancakes',
      recipeSlug: 'fluffy-buttermilk-pancakes',
      heroImage: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Tall stack of golden fluffy buttermilk pancakes with melting butter and pure maple syrup',
      summary: 'Produce tall, cloud-soft diner-style buttermilk pancakes through gentle batter folding and surface-tension griddle thermal management.',
      techniques: [
        {
          title: 'Technique 1: Minimal Shear Batter Folding & Starch Hydration Rest',
          category: 'Batter Preparation & Chemistry',
          steps: [
            'Sift flour, sugar, double-acting baking powder, baking soda, and fine sea salt together in a wide ceramic bowl.',
            'In a separate jug, whisk cultured buttermilk, eggs, and slightly cooled melted butter until homogenous.',
            'Pour wet mixture into dry ingredients. Using a wide silicone spatula, fold from the bottom up just until large flour streaks disappear.',
            'Stop immediately while small lumps remain visible. Allow batter to rest undisturbed on the counter for 5 to 8 minutes.'
          ],
          visualCue: 'The rested batter will swell visibly and develop small carbon dioxide bubbles on its surface before touching the griddle.',
          tempBenchmark: 'Resting allows starch molecules to hydrate and relax gluten strands, ensuring maximum tenderness.',
          proTip: 'Never use an electric mixer or whisk aggressively; gluten development is the primary enemy of fluffy pancakes.'
        },
        {
          title: 'Technique 2: Griddle Thermal Regulation & Micro-Crater Bubble Timing',
          category: 'Griddle Baking & Flipping Method',
          steps: [
            'Heat a heavy cast-iron griddle or flat skillet over medium heat until a drop of water sizzles and dances across the iron.',
            'Wipe the surface with a paper towel dipped in neutral oil or clarified butter to create a micro-thin non-stick patina.',
            'Ladle 1/3 cup of batter per pancake, leaving at least 2 inches between cakes to allow uninhibited heat circulation.',
            'Cook for 2 to 3 minutes until bubbles burst across the surface and the craters stay open. Slide a wide spatula underneath and flip in a single wrist motion.'
          ],
          visualCue: 'Flip only when bubbles burst and the outer rim looks matte and set, not glossy wet.',
          tempBenchmark: 'Ideal griddle surface temperature is 350°F to 375°F (175°C to 190°C).',
          proTip: 'Flip pancakes once and only once; flipping multiple times or pressing down with a spatula compresses the delicate air pockets.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Editorial Masthead */}
      <section className="border-b border-stone-200 pt-10 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-mono mb-3">
          <ChefHat className="w-4 h-4 text-stone-600" />
          <span>Professional Kitchen Craft · Culinary Physics · Step-by-Step Methods</span>
        </div>
        
        {/* Single H1 Tag */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium text-stone-900 tracking-tight leading-tight">
          Master Cooking Techniques & Kitchen Methods
        </h1>
        
        <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-3xl mx-auto font-serif italic leading-relaxed">
          Great cooking is never an accident. Explore 2 distinct, tested chef techniques for every recipe on our site, with step-by-step guidance, temperature targets, and visual cues.
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
            to="/heritage"
            className="text-stone-900 underline underline-offset-4 hover:text-stone-700"
          >
            Read the cultural history and ancestral traditions of our dishes →
          </Link>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* AEO (Answer Engine Optimization) Direct Questions & Answer-First Section */}
        <section className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-10 shadow-2xs">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">
              Culinary Physics & Method FAQ
            </span>
            <div className="mt-6 space-y-8">
              
              {/* Direct Question H2 #1 */}
              <div className="border-b border-stone-100 pb-6">
                <h2 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
                  What is the secret to searing meat without it sticking to the pan?
                </h2>
                {/* Answer-first 1-2 sentence paragraph */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mt-2.5">
                  The secret to searing meat without sticking is thoroughly patting the surface dry with paper towels, preheating the pan until oil shimmers, and leaving the meat completely undisturbed until the Maillard crust forms. Once caramelized protein bonds naturally contract and detach from the metal, the meat will release cleanly without tearing.
                </p>
                <div className="mt-3 text-xs text-stone-600">
                  <span>Explore the method: </span>
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
                  Why does resting batter make pancakes and baked goods significantly fluffier?
                </h2>
                {/* Answer-first 1-2 sentence paragraph */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mt-2.5">
                  Resting batter for 5 to 10 minutes allows dry flour starches to fully hydrate and absorb liquid while relaxing tight gluten strands formed during mixing. This brief rest also gives chemical leaveners like baking soda and buttermilk acid time to generate uniform carbon dioxide micro-bubbles that expand into an ultra-tender honeycomb crumb.
                </p>
                <div className="mt-3 text-xs text-stone-600">
                  <span>Explore the method: </span>
                  <Link
                    to="/recipes/fluffy-buttermilk-pancakes"
                    className="font-medium text-stone-900 underline hover:text-stone-700"
                  >
                    Read our tested buttermilk pancake science and recipe
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Master Catalog: 2 Distinct Techniques per Recipe */}
        <section className="space-y-14">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">
              Comprehensive Kitchen Manual
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-medium text-stone-900 mt-1">
              Dual Masterclass Techniques for Every Signature Dish
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Each recipe on our site relies on two critical technical pillars—one for preparation and one for thermal execution.
            </p>
          </div>

          <div className="space-y-16">
            {recipeTechniqueCatalog.map((item, index) => (
              <div
                key={item.recipeSlug}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-2xs"
              >
                {/* Recipe Header Banner */}
                <div className="border-b border-stone-200 bg-stone-50/70 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-stone-200 bg-stone-100">
                      <ImageWithFallback
                        src={item.heroImage}
                        alt={item.imageAlt}
                        fallbackTitle={item.recipeTitle}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">
                        Recipe #{index + 1} Technical Breakdown
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-medium text-stone-900 mt-0.5">
                        {item.recipeTitle}
                      </h3>
                      <p className="text-xs text-stone-600 mt-1 max-w-md">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={item.recipePath}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 text-stone-50 text-xs font-medium rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>View Complete Recipe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 2 Distinct Techniques Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
                  {item.techniques.map((tech, tIdx) => (
                    <div key={tIdx} className="p-6 sm:p-8 space-y-6">
                      
                      <div className="space-y-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full inline-block">
                          {tech.category}
                        </span>
                        <h4 className="text-lg font-serif font-medium text-stone-900 leading-snug">
                          {tech.title}
                        </h4>
                      </div>

                      {/* Step-by-Step Guidance */}
                      <div className="space-y-3">
                        <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider block font-mono">
                          Step-by-Step Execution:
                        </span>
                        <ol className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                          {tech.steps.map((step, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2.5">
                              <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-800 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
                                {sIdx + 1}
                              </span>
                              <span className="leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Technical Benchmarks & Cues */}
                      <div className="space-y-3 pt-4 border-t border-stone-100 text-xs">
                        <div className="flex items-start gap-2 text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-stone-900 font-medium">Visual & Audio Cue: </strong>
                            <span>{tech.visualCue}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 text-stone-700">
                          <Thermometer className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-stone-900 font-medium">Temperature Benchmark: </strong>
                            <span>{tech.tempBenchmark}</span>
                          </div>
                        </div>

                        <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/80 text-stone-600 italic">
                          <strong className="not-italic text-stone-900 font-medium">Chef's Rule: </strong>
                          {tech.proTip}
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Card Footer Internal Link */}
                <div className="bg-stone-50 border-t border-stone-200 px-6 sm:px-8 py-3.5 flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-mono">
                    URL: {item.recipePath}
                  </span>
                  <Link
                    to={item.recipePath}
                    className="font-medium text-stone-900 underline hover:text-stone-700 flex items-center gap-1"
                  >
                    <span>Practice these 2 techniques with our {item.recipeTitle}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Closing Kitchen Reference Banner */}
        <section className="bg-stone-900 text-stone-100 rounded-2xl p-8 sm:p-12 border border-stone-800 text-center max-w-3xl mx-auto space-y-4">
          <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white">
            Confidence Through Culinary Fundamentals
          </h3>
          <p className="text-sm text-stone-300 leading-relaxed max-w-xl mx-auto">
            When you understand the science of why techniques work—from protein coagulation to spice blooming—you no longer need to rely on rigid recipes alone.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/recipes"
              className="px-5 py-2.5 bg-amber-500 text-stone-950 font-medium rounded-lg text-xs hover:bg-amber-400 transition-colors"
            >
              Explore our complete collection of easy homemade dinner recipes
            </Link>
            <Link
              to="/heritage"
              className="px-5 py-2.5 bg-stone-800 text-stone-200 border border-stone-700 rounded-lg text-xs font-medium hover:bg-stone-700 transition-colors"
            >
              Read the cultural history and ancestral traditions of our dishes
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
