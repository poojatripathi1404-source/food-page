import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'neapolitan-pizza-art',
    title: 'The Art of Handcrafted Neapolitan Pizza',
    subtitle: 'High-hydration dough, 48-hour cold fermentation, and blistering leopard-spotted crust',
    category: 'Artisan Baking',
    author: {
      name: 'Matteo Rossi',
      role: 'Master Pizzaiolo & Fermentation Specialist',
      bio: 'Trained under third-generation pizzaioli in Spaccanapoli, Naples.'
    },
    publishedDate: 'October 8, 2026',
    readTimeMinutes: 9,
    heroImage: '/src/assets/images/neapolitan_pizza_1791770968429.jpg',
    imageCaption: 'Fig. 1 — Blistered cornicione with fior di latte and fragrant sweet basil over a wood-fired hearth.',
    summary: 'Mastering true Pizza Napoletana requires understanding baker percentages, gluten network relaxation, and radiant thermal shock. Here is the definitive formula.',
    origin: 'Naples, Campania, Italy',
    difficulty: 'Intermediate',
    prepTime: '48 hrs (bulk proof)',
    cookTime: '90 seconds',
    servingsBase: 4,
    layoutTheme: 'artisan-baker',
    introProse: [
      'A true Neapolitan pizza is an ephemeral marvel: crisp yet yielding, airy like spun cloud inside the cornicione, and fragrant with the primordial scent of charred wheat and fermented yeast. It lives and dies within ninety seconds in an inferno exceeding 450°C (850°F).',
      'The difference between a pedestrian flatbread and an authentic Neapolitan pie lies not in elaborate toppings, but in disciplined dough hydration (68–70%), controlled enzyme activity during a 48-hour cold ferment, and the gentle touch required to push air outward from center to rim without degasification.'
    ],
    culinaryScience: {
      headline: 'The Maillard Reaction & Thermal Puff Dynamics',
      explanation: 'At 450°C, trapped carbon dioxide and microscopic moisture pockets flash-vaporize instantly within the dough matrix. The rapid steam expansion inflates the gluten strands before the proteins set, creating the prized honeycomb cornicione. Concurrently, sugars undergo rapid caramelization and Maillard browning, yielding the signature leopard spots (maculatura).'
    },
    equipment: [
      'Pizza stone or baking steel (minimum 6mm thickness)',
      'Digital scale with 0.1g precision',
      'Perforated aluminum pizza peel',
      'Proofing tubs with airtight lids'
    ],
    ingredients: [
      { item: 'Tipo 00 Wheat Flour (W 280–310)', baseAmount: 500, unit: 'g', notes: 'High protein content with extensible gluten', category: 'Dough' },
      { item: 'Cold Spring Water (15°C)', baseAmount: 340, unit: 'ml', notes: '68% hydration ratio', category: 'Dough' },
      { item: 'Fine Sea Salt (Trapani)', baseAmount: 14, unit: 'g', notes: '2.8% salinity for structural gluten strength', category: 'Dough' },
      { item: 'Fresh Brewer’s Yeast', baseAmount: 1.2, unit: 'g', notes: 'Or 0.4g active dry yeast', category: 'Dough' },
      { item: 'San Marzano D.O.P. Whole Peeled Tomatoes', baseAmount: 400, unit: 'g', notes: 'Crushed gently by hand, never blended', category: 'Sauce' },
      { item: 'Fresh Fior di Latte Mozzarella', baseAmount: 320, unit: 'g', notes: 'Drained for 2 hours and torn into strips', category: 'Main' },
      { item: 'Fresh Genovese Basil Leaves', baseAmount: 16, unit: 'leaves', notes: 'Torn fresh before baking', category: 'Garnish' },
      { item: 'Extra Virgin Olive Oil (Tuscan or Campanian)', baseAmount: 30, unit: 'ml', notes: 'Drizzled in a spiral motion', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Water Dissolution & Autolyse Kickstart',
        durationMinutes: 15,
        durationLabel: '15 min',
        description: 'Dissolve the salt completely in cold water first. Next, dissolve the fresh yeast. Gradually incorporate 80% of the Tipo 00 flour with your hands until a shaggy slurry forms. Rest for 15 minutes to initiate enzymatic hydration.',
        keyTechnique: 'Dissolving salt first stabilizes water tension before yeast interaction.'
      },
      {
        stepNumber: 2,
        title: 'Gluten Development & Slap-and-Fold',
        durationMinutes: 12,
        durationLabel: '12 min',
        description: 'Incorporate remaining flour. Transfer to an un-floured marble or granite surface. Work the dough using rhythmic slap-and-fold motions until a smooth, satiny skin forms without tearing. The dough temperature should read 23°C (73°F).',
        keyTechnique: 'Slap-and-fold develops tensile gluten strength without overheating the dough.'
      },
      {
        stepNumber: 3,
        title: 'Bulk Rest and Cold Ferment (Maturation)',
        durationMinutes: 2880,
        durationLabel: '48 hrs',
        description: 'Let bulk dough rest at ambient room temperature (20°C) for 2 hours in a covered bowl. Transfer to refrigerator (4°C) for 40 to 48 hours. This allows proteolytic enzymes to break complex proteins into flavorful amino acids.',
        keyTechnique: 'Extended cold proofing produces digestible, nuanced crust complexity.'
      },
      {
        stepNumber: 4,
        title: 'Stag入れ: Balling (Panielli)',
        durationMinutes: 240,
        durationLabel: '4 hrs',
        description: 'Divide into four 215g balls. Seal the bottom seams tightly by cupping hands and rolling along the counter. Place in proofing box at ambient room temperature 4 hours prior to service until double in size.',
        keyTechnique: 'Tight surface tension prevents air bubbles from leaking during the final proof.'
      },
      {
        stepNumber: 5,
        title: 'Hand-Stretching & High-Heat Baking',
        durationMinutes: 3,
        durationLabel: '3 min',
        description: 'Dust work surface with fine semolina. Use fingertips to press from the center outward, driving gas into the outer rim. Never touch the edge! Top lightly with hand-crushed San Marzano sauce, drained mozzarella, basil, and olive oil. Slide onto blazing 450°C stone and bake until blistered.',
        keyTechnique: 'Avoid rolling pins entirely—gentle finger presses safeguard air pockets.'
      }
    ],
    proTips: [
      'Never purée San Marzano tomatoes in an electric blender; blending shears the seeds and imparts an astringent, bitter flavor.',
      'Drain your fresh mozzarella on paper towels for at least 2 hours prior to baking to avoid a soggy center ("lake effect").',
      'Use coarse semolina rimacinata for dusting your peel instead of standard flour to prevent burning.'
    ],
    winePairing: {
      beverage: 'Lacryma Christi del Vesuvio Rosso',
      vintageOrRegion: 'Campania, Italy',
      tastingNote: 'Volcanic mineral backbone with notes of wild cherries and smoky ash that mirrors the charred wood crust.'
    },
    nutrition: {
      calories: 680,
      protein: '28g',
      carbs: '86g',
      fat: '24g'
    },
    tags: ['Pizza', 'Italian', 'Fermentation', 'Baking', 'Comfort Food']
  },
  {
    slug: 'tonkotsu-ramen-mastery',
    title: 'Silky Tonkotsu Ramen from Scratch',
    subtitle: '18-hour broth emulsification, collagen chemistry, chashu roulade & alkaline noodles',
    category: 'Heritage Broths',
    author: {
      name: 'Chef Kenji Takahashi',
      role: 'Ramen Researcher & Broth Master',
      bio: 'Spent 12 years perfecting Hakata-style stocks across Fukuoka prefecture.'
    },
    publishedDate: 'October 6, 2026',
    readTimeMinutes: 12,
    heroImage: '/src/assets/images/tonkotsu_ramen_1791770980316.jpg',
    imageCaption: 'Fig. 2 — Steaming Hakata tonkotsu bowl enriched with chashu pork belly, molten yolk ajitama, and scallions.',
    summary: 'The secret to Hakata tonkotsu is not simmering, but a violent, rolling boil that mechanical emulsifies marrow lipids into gelatinous broth water.',
    origin: 'Fukuoka (Hakata), Japan',
    difficulty: 'Masterclass',
    prepTime: '3 hrs',
    cookTime: '18 hrs',
    servingsBase: 6,
    layoutTheme: 'noodle-broth',
    introProse: [
      'Tonkotsu is not a delicate consommé; it is an unabashed ode to porcine richness, transforming dense femur bones and cartilage into an opaque, milky nectar that coats the lips with pure unctuous satisfaction.',
      'Unlike French stocks that demand tranquil, barely shimmering heat to preserve crystal clarity, Hakata tonkotsu requires culinary audacity: hours of aggressive, rolling turbulence to force pork fat and hydrolyzed gelatin into an unbreakable colloidal emulsion.'
    ],
    culinaryScience: {
      headline: 'Lipid-Gelatin Colloidal Emulsification',
      explanation: 'Pork bones are dense with type I and type II collagen. Prolonged heat hydrolyzes collagen into soluble gelatin. The mechanical violence of a rolling boil splits fat droplets down to microscopic sizes, while gelatin acts as an amphiphilic surfactant, encapsulating the fat globules so they suspend indefinitely in water.'
    },
    equipment: [
      'Heavy-gauge 16-quart stockpot with lid',
      'Fine mesh chinois or skimmer',
      'Butcher’s kitchen twine',
      'Infrared probe thermometer'
    ],
    ingredients: [
      { item: 'Pork Femur Bones (cross-cut)', baseAmount: 2200, unit: 'g', notes: 'Exposes marrow for maximum emulsion', category: 'Broth' },
      { item: 'Pork Trotters (split)', baseAmount: 1000, unit: 'g', notes: 'Packed with natural connective collagen', category: 'Broth' },
      { item: 'Pork Belly (skin on, for Chashu)', baseAmount: 900, unit: 'g', notes: 'Rolled and tied with twine', category: 'Main' },
      { item: 'Yellow Onions (halved with skins)', baseAmount: 2, unit: 'whole', notes: 'Charred for sweetness', category: 'Aromatics' },
      { item: 'Fresh Ginger Root (thick slices)', baseAmount: 70, unit: 'g', notes: 'Cracked with flat cleaver', category: 'Aromatics' },
      { item: 'Whole Garlic Heads (halved crosswise)', baseAmount: 2, unit: 'heads', notes: 'Roasted lightly', category: 'Aromatics' },
      { item: 'Shoyu Tare (Soy reduction base)', baseAmount: 180, unit: 'ml', notes: 'Kombu, niboshi, shoyu, and mirin reduction', category: 'Sauce' },
      { item: 'Fresh Alkaline Ramen Noodles (26番)', baseAmount: 720, unit: 'g', notes: 'Low hydration, firm Hakata texture', category: 'Main' },
      { item: 'Ajitsuke Tamago (Marinated soft eggs)', baseAmount: 6, unit: 'whole', notes: '6-minute eggs cured in mirin-shoyu', category: 'Garnish' },
      { item: 'Mayu (Black Garlic Oil)', baseAmount: 45, unit: 'ml', notes: 'Bitter-sweet charred garlic infusion', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Initial Parboil & Bone Scrub',
        durationMinutes: 45,
        durationLabel: '45 min',
        description: 'Submerge pork femurs and trotters in cold water. Bring to a rapid boil for 15 minutes. Drain entire pot and scrub every bone under cold running water with a stiff brush to remove coagulated hemoglobin and myoglobin impurities.',
        keyTechnique: 'A meticulous scrub ensures pure white stock without grayish muddiness.'
      },
      {
        stepNumber: 2,
        title: 'Rolling Boil Extraction (Hours 1–12)',
        durationMinutes: 720,
        durationLabel: '12 hrs',
        description: 'Return cleaned bones to pot, submerge with fresh filtered water by 3 inches. Maintain a steady, vigorous rolling boil with the lid clamped slightly ajar. Top off water level every 2 hours to keep bones submerged.',
        keyTechnique: 'A rolling boil is non-negotiable for mechanical lipid suspension.'
      },
      {
        stepNumber: 3,
        title: 'Aromatics Addition & Final Reduction (Hours 13–18)',
        durationMinutes: 360,
        durationLabel: '6 hrs',
        description: 'Add charred onions, ginger, and garlic heads during the final 4 hours. By hour 18, the stock should be creamy white and reduce to a velvety consistency that clings to the back of a ladle.',
        keyTechnique: 'Adding aromatics too early makes the broth acrid; keep them in the final window.'
      },
      {
        stepNumber: 4,
        title: 'Chashu Braise & Glaze',
        durationMinutes: 120,
        durationLabel: '2 hrs',
        description: 'Roll pork belly tight and secure with butcher twine. Sear in skillet until golden. Braise in a mixture of sake, mirin, soy sauce, and scallions at 85°C (185°F) for 2 hours until yielding. Chill before slicing.',
        keyTechnique: 'Chilling chashu before slicing prevents warm meat fibers from shredding.'
      },
      {
        stepNumber: 5,
        title: 'Tare Assembly & Flash-Boiled Noodles',
        durationMinutes: 5,
        durationLabel: '5 min',
        description: 'Pour 35ml hot Shoyu Tare and 10ml rendered pork lard into warmed ceramic ramen bowls. Whisk in 350ml blazing tonkotsu broth. Boil fresh alkaline noodles for exactly 45 seconds (katame firm). Fold noodles into bowl, top with sliced chashu, halved egg, scallions, and a swirl of black garlic oil.',
        keyTechnique: 'Noodles cook in under a minute; serve immediately to avoid noodle bloat.'
      }
    ],
    proTips: [
      'Keep your serving bowls pre-heated with hot water before assembling. Tonkotsu fat congeals quickly if the ceramic is cool.',
      'Do not salt the broth directly in the pot. All sodium and savory depth must originate from your seasoned tare.',
      'Crack bones with a cleaver before the boil to unlock marrow channels.'
    ],
    winePairing: {
      beverage: 'Kimoto or Yamahai Junmai Sake',
      vintageOrRegion: 'Niigata, Japan',
      tastingNote: 'High lactic acidity cuts through intense pork fat while earthy rice notes mirror the umami tare.'
    },
    nutrition: {
      calories: 890,
      protein: '42g',
      carbs: '74g',
      fat: '48g'
    },
    tags: ['Ramen', 'Japanese', 'Soup', 'Slow Cook', 'Technique']
  },
  {
    slug: 'oaxacan-mole-negro',
    title: 'The Secrets of Slow-Simmered Oaxacan Mole Negro',
    subtitle: '28 botanical ingredients, charred chilhuacle chiles, Mexican chocolate & clay pot alchemy',
    category: 'Mexican Regional',
    author: {
      name: 'Doña Elena Morales',
      role: 'Oaxacan Traditional Cocinera',
      bio: 'Preserving Central Valley ancestral culinary lore and indigenous molcajete traditions.'
    },
    publishedDate: 'October 4, 2026',
    readTimeMinutes: 11,
    heroImage: '/src/assets/images/oaxacan_mole_1791770996966.jpg',
    imageCaption: 'Fig. 3 — Obsidian-hued mole negro served over pasture-raised chicken with toasted sesame and heirloom tortillas.',
    summary: 'Mole Negro is not chocolate sauce; it is an epic symphonic composition of controlled ash, dried heritage chiles, seeds, spices, and dried fruits cooked in raw lard.',
    origin: 'Oaxaca de Juárez, Mexico',
    difficulty: 'Masterclass',
    prepTime: '2 hrs',
    cookTime: '6 hrs',
    servingsBase: 8,
    layoutTheme: 'heritage-simmer',
    introProse: [
      'In the cloud-veiled valleys of Oaxaca, Mole Negro is revered as holy work. It is prepared for weddings, Day of the Dead vigils, and births—a sauce of ritual transcendence that encapsulates Mexican cultural continuity.',
      'The dramatic black color is achieved not through dark cocoa, but through an ancient culinary paradox: chile seeds and veins charred deliberately to white-hot ash over an open comal, then rinsed to strip harsh bitterness while retaining deep smoky carbon tones.'
    ],
    culinaryScience: {
      headline: 'Pyrolysis of Capsicum Seeds & Polyphenol Balancing',
      explanation: 'Charring chile seeds until blackened initiates controlled pyrolysis. The extreme carbonization yields unique aromatic compounds (phenols and pyrazines) that create a smoky, earthy base. Counterbalanced with plantains, raisins, almonds, Mexican cinnamon, and cane sugar chocolate, the harsh acridity transforms into deep, velvety complexity.'
    },
    equipment: [
      'Traditional cast-iron comal or heavy skillet',
      'High-speed blender or stone metate',
      'Glazed clay cazuela (earthenware stew pot)',
      'Fine mesh sieve'
    ],
    ingredients: [
      { item: 'Chilhuacle Negro Chiles (dried)', baseAmount: 120, unit: 'g', notes: 'Endemic Oaxacan treasure', category: 'Spices' },
      { item: 'Mulato Chiles (stemmed & seeded)', baseAmount: 100, unit: 'g', notes: 'Provides rich leather and tobacco notes', category: 'Spices' },
      { item: 'Pasilla Chiles', baseAmount: 80, unit: 'g', notes: 'Adds gentle tart heat', category: 'Spices' },
      { item: 'Raw Chile Seeds (reserved from above)', baseAmount: 40, unit: 'g', notes: 'Charred to black ash for color', category: 'Spices' },
      { item: 'Ripe Plantain (sliced)', baseAmount: 1, unit: 'whole', notes: 'Caramelized in lard for body', category: 'Main' },
      { item: 'Raw White Sesame Seeds', baseAmount: 60, unit: 'g', notes: 'Toasted until golden', category: 'Main' },
      { item: 'Whole Raw Almonds & Pecans', baseAmount: 70, unit: 'g', notes: 'Toasted gently', category: 'Main' },
      { item: 'Mexican Dark Chocolate (Criollo)', baseAmount: 90, unit: 'g', notes: 'Ground with cinnamon and sugar', category: 'Sauce' },
      { item: 'Rendered Pork Lard (Manteca)', baseAmount: 80, unit: 'g', notes: 'Authentic medium for frying puree', category: 'Sauce' },
      { item: 'Rich Poultry Broth', baseAmount: 1500, unit: 'ml', notes: 'Simmered with Mexican oregano and thyme', category: 'Broth' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Seeding & The Carbonization Ritual',
        durationMinutes: 30,
        durationLabel: '30 min',
        description: 'Stem and seed all chiles, reserving all seeds and veins in a metal bowl. Heat comal over medium heat and dry-toast the seeds until they catch flame and burn into fragrant black ash. Submerge charred seeds in cool water for 20 minutes, then drain to remove bitter surface carbon.',
        keyTechnique: 'Soaking the charred seeds tames astringency while preserving pure obsidian tint.'
      },
      {
        stepNumber: 2,
        title: 'Toast the Chiles and Nuts',
        durationMinutes: 25,
        durationLabel: '25 min',
        description: 'Press chile pods against hot dry comal for 10 seconds per side until fragrant; do not burn the skins. Soak toasted chiles in warm broth. In the same pan, individually toast sesame seeds, almonds, pumpkin seeds, whole allspice, cloves, and canela (Mexican cinnamon).',
        keyTechnique: 'Toast each spice group separately; small seeds burn at lower thresholds than nuts.'
      },
      {
        stepNumber: 3,
        title: 'Caramelizing Fruits & Thickeners',
        durationMinutes: 20,
        durationLabel: '20 min',
        description: 'In 2 tablespoons of lard, fry sliced ripe plantain until golden brown. Fry raisins until puffed. Fry a stale corn tortilla and a piece of bolillo bread until deeply crisp. These starchy elements provide structural viscosity.',
        keyTechnique: 'Fried plantain and charred tortillas naturally thicken the mole without cornstarch.'
      },
      {
        stepNumber: 4,
        title: 'Pureeing to Silken Velvet',
        durationMinutes: 20,
        durationLabel: '20 min',
        description: 'In batches, blend the soaked chiles, soaked charred seeds, nuts, seeds, fried fruits, and aromatics with warm broth until microscopically smooth. Strain through a fine-mesh sieve.',
        keyTechnique: 'A smooth puree ensures the fat stays bound without separating later.'
      },
      {
        stepNumber: 5,
        title: 'Frying the Puree & Chocolate Simmer',
        durationMinutes: 180,
        durationLabel: '3 hrs',
        description: 'Melt remaining lard in a clay cazuela until shimmering. Carefully pour in the mole puree (it will splatter vigorously—the traditional "chillar"). Stir constantly for 30 minutes until the mole darkens. Gradually add remaining broth, Mexican chocolate, and avocado leaves. Simmer over low heat for 3 hours until glossy.',
        keyTechnique: 'The initial vigorous lard fry sears the flavors and melds the chile paste.'
      }
    ],
    proTips: [
      'Always prepare mole negro at least 24 hours in advance; the flavors marry and soften miraculously overnight.',
      'Use Mexican canela (soft Ceylon cinnamon) rather than cassia bark for floral, sweet notes.',
      'Garnish with freshly toasted sesame seeds right before landing on the dining table.'
    ],
    winePairing: {
      beverage: 'Ancestral Espadín Mezcal or Old-Vine Grenache',
      vintageOrRegion: 'Santiago Matatlán, Oaxaca',
      tastingNote: 'Smoky agave spirit with herbal notes amplifies the charred chile complexity of the mole.'
    },
    nutrition: {
      calories: 520,
      protein: '16g',
      carbs: '38g',
      fat: '34g'
    },
    tags: ['Mexican', 'Mole', 'Heritage', 'Spices', 'Slow Food']
  },
  {
    slug: 'sourdough-boule-mastery',
    title: 'Mastering the French Sourdough Boule',
    subtitle: 'Crumb anatomy, autolyse science, coil folds, and Dutch oven steam retention',
    category: 'Artisan Baking',
    author: {
      name: 'Claire Beauchamp',
      role: 'Artisan Baker & Levain Conservator',
      bio: 'Runs a wood-fired sourdough collective in Drôme, France.'
    },
    publishedDate: 'October 3, 2026',
    readTimeMinutes: 10,
    heroImage: '/src/assets/images/sourdough_boule_1791771011119.jpg',
    imageCaption: 'Fig. 4 — High-hydration country boule with an open blistered ear and airy custard crumb.',
    summary: 'Achieving an open, glossy, honeycomb crumb is a masterclass in hydration balance, temperature control, and tension shaping.',
    origin: 'Provence, France',
    difficulty: 'Advanced',
    prepTime: '24 hrs',
    cookTime: '45 min',
    servingsBase: 8,
    layoutTheme: 'artisan-baker',
    introProse: [
      'Wild sourdough is alive. Flour and water, in the presence of wild lactobacilli and Saccharomyces exiguus, undergo a quiet metabolic transformation over hours of slow rest.',
      'When you slice into a properly baked French boule, you are greeted by an explosive crackling crust (la grigne), an intoxicating aroma of lactic and acetic tang, and an interior crumb that glistens with translucent custard bubbles.'
    ],
    culinaryScience: {
      headline: 'Autolyse Enzymatic Hydrolysis & Starch Gelatinization',
      explanation: 'Mixing flour and water without salt for an hour allows amylase enzymes to convert starches into simple sugars for the yeast, while protease breaks protein bonds to relax gluten extensibility. In the oven, trapped steam inside the Dutch oven delays crust gelatinization, allowing maximum vertical spring (oven bloom) before setting.'
    },
    equipment: [
      'Heavy cast iron combo cooker or Dutch oven',
      'Curved razor lame for scoring',
      'Oval or round cane banneton basket',
      'Bench knife / dough scraper'
    ],
    ingredients: [
      { item: 'Unbleached Strong Bread Flour (12.7% protein)', baseAmount: 400, unit: 'g', notes: 'Foundation structure', category: 'Dough' },
      { item: 'Stone-Ground Whole Rye or Whole Wheat', baseAmount: 100, unit: 'g', notes: 'Feeds wild yeast with vital nutrients', category: 'Dough' },
      { item: 'Pure Spring Water (warm, 26°C)', baseAmount: 375, unit: 'ml', notes: '75% total hydration ratio', category: 'Dough' },
      { item: 'Active Wild Levain (100% hydration)', baseAmount: 100, unit: 'g', notes: 'Used at peak volume (2.5x rise)', category: 'Dough' },
      { item: 'Fine Sea Salt (Guérande)', baseAmount: 10, unit: 'g', notes: '2% baker proportion for elasticity', category: 'Dough' },
      { item: 'Rice Flour (for banneton dusting)', baseAmount: 25, unit: 'g', notes: 'Prevents sticking to cane basket', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Warm Autolyse Phase',
        durationMinutes: 60,
        durationLabel: '60 min',
        description: 'Whisk together bread flour and rye flour. Add 350ml warm water (reserve 25ml for salt phase). Mix until no dry pockets remain. Cover with damp cloth and rest at 25°C for 60 minutes.',
        keyTechnique: 'Autolyse develops gluten spontaneously without any tiring manual kneading.'
      },
      {
        stepNumber: 2,
        title: 'Levain Inoculation & Salt Integration',
        durationMinutes: 30,
        durationLabel: '30 min',
        description: 'Spread active levain over dough and dimple with wet fingers. Rest 20 minutes. Add salt and reserved 25ml water. Knead with rhythmic Rubaud scoops for 5 minutes until glossy and supple.',
        keyTechnique: 'Rubaud method introduces oxygen bubbles while folding gluten layers.'
      },
      {
        stepNumber: 3,
        title: 'Bulk Fermentation & Four Coil Folds',
        durationMinutes: 240,
        durationLabel: '4 hrs',
        description: 'Over 4 hours at 26°C, perform four gentle coil folds spaced 45 minutes apart. Lift the center of the dough with wet hands and tuck both ends underneath. Stop folding when dough exhibits a 40% volume increase and domed bubbly edges.',
        keyTechnique: 'Coil folds align gluten matrices gently without popping delicate gas pockets.'
      },
      {
        stepNumber: 4,
        title: 'Pre-Shape, Bench Rest, and Final Banneton Tension',
        durationMinutes: 40,
        durationLabel: '40 min',
        description: 'Tip dough onto clean bench. Lightly round with bench knife. Rest 20 minutes uncovered. Flip and fold envelope style: bottom up, sides in, roll down. Drag against bench to generate taut surface tension. Place into rice-floured banneton. Cold retard in fridge (3°C) for 14 hours.',
        keyTechnique: 'Cold overnight retard solidifies fats and boosts acetic acid complexity.'
      },
      {
        stepNumber: 5,
        title: 'Scoring & Steam Baking',
        durationMinutes: 45,
        durationLabel: '45 min',
        description: 'Preheat Dutch oven to 250°C (485°F) for 1 hour. Invert chilled loaf onto parchment. Score at a 30-degree angle with a sharp razor lame 1cm deep. Transfer to hot pot, drop 2 ice cubes under parchment, cover lid immediately. Bake 20 minutes covered, then remove lid, reduce to 220°C, and bake 25 minutes uncovered until mahogany.',
        keyTechnique: 'The 30-degree blade angle creates a directional flap that blooms into a crisp ear.'
      }
    ],
    proTips: [
      'Wait at least 2 full hours after taking the bread out of the oven before slicing; slicing early collapses the warm gelatinized crumb into gumminess.',
      'Use 50/50 rice flour and wheat flour to dust your banneton; rice flour contains zero gluten and will never stick.',
      'Check water temperature diligently: dough temperature is the single biggest determinant of ferment rate.'
    ],
    winePairing: {
      beverage: 'Biodynamic Chenin Blanc or Farmhouse Cider',
      vintageOrRegion: 'Loire Valley, France',
      tastingNote: 'Crisp green orchard fruit and subtle yeast lees character complement the sour wheat crust.'
    },
    nutrition: {
      calories: 220,
      protein: '7g',
      carbs: '44g',
      fat: '1g'
    },
    tags: ['Bread', 'Baking', 'French', 'Sourdough', 'Fermentation']
  },
  {
    slug: 'hyderabadi-dum-biryani',
    title: 'The Alchemy of Spices in Hyderabadi Dum Biryani',
    subtitle: 'Fragrant basmati rice, tender marinated mutton, saffron milk infusion & sealed-pot steam',
    category: 'Royal Indian',
    author: {
      name: 'Chef Farhan Qureshi',
      role: 'Custodian of Nizami Cuisine',
      bio: 'Descendant of royal court khansamas from the historic Charminar quarters.'
    },
    publishedDate: 'October 2, 2026',
    readTimeMinutes: 11,
    heroImage: '/src/assets/images/hyderabadi_biryani_1791771042912.jpg',
    imageCaption: 'Fig. 5 — Royal brass deg opened to reveal fragrant saffron-stained basmati and caramelized birista.',
    summary: 'Kacchi Biryani cooks raw spiced meat and partially boiled rice together inside a dough-sealed brass handi, relying solely on vaporized meat juices to cook every grain.',
    origin: 'Hyderabad, Telangana, India',
    difficulty: 'Masterclass',
    prepTime: '4 hrs (marination)',
    cookTime: '1 hr 15 min',
    servingsBase: 6,
    layoutTheme: 'heritage-simmer',
    introProse: [
      'In the royal banquets of the Nizams of Hyderabad, biryani was never mere food; it was an imperial ceremony of perfumed indulgence. The pinnacle is Kacchi Dum Biryani: raw marinated goat meat layered with rice and cooked under sealed dough.',
      'The genius lies in temperature hierarchy: the raw meat at the bottom receives direct heat and releases juices that vaporize upward, cooking the 70% par-cooked rice above. When unsealed, steam carries the heady perfume of Kashmiri saffron, kewra water, and toasted mace.'
    ],
    culinaryScience: {
      headline: 'Convective Vapor Entrapment in Sealed Dum',
      explanation: 'Sealing the lid with whole-wheat dough (purdah) converts the handi into a gentle pressure cooker. As water in the yogurt and meat vaporizes, pressure rises slightly, raising the boiling point of steam and forcing fat-soluble spice volatiles (eugenol, cinnamaldehyde, safranal) deep into the expanding rice grains.'
    },
    equipment: [
      'Heavy-bottomed cast iron or brass handi pot with flat rim',
      'Wide perforated rice colander',
      'Mortar and pestle',
      'Cast iron tawa (heat diffuser plate)'
    ],
    ingredients: [
      { item: 'Bone-in Young Goat or Lamb Shoulder', baseAmount: 1000, unit: 'g', notes: 'Cut into 2-inch pieces with bone marrow intact', category: 'Main' },
      { item: 'Aged Extra-Long Basmati Rice (2+ years)', baseAmount: 600, unit: 'g', notes: 'Gently soaked in cold water for 45 minutes', category: 'Main' },
      { item: 'Greek-style Thick Curd (Yogurt)', baseAmount: 250, unit: 'g', notes: 'Whisked with green papaya paste', category: 'Sauce' },
      { item: 'Birista (Deep-fried sliced red onions)', baseAmount: 180, unit: 'g', notes: 'Golden brown and crisp', category: 'Garnish' },
      { item: 'Pure Desi Ghee', baseAmount: 80, unit: 'g', notes: 'Divided between marinade and rice topping', category: 'Sauce' },
      { item: 'Kashmiri Saffron Strands', baseAmount: 1.5, unit: 'g', notes: 'Steeped in 60ml warm milk', category: 'Garnish' },
      { item: 'Fresh Mint & Cilantro Leaves', baseAmount: 40, unit: 'g', notes: 'Finely torn', category: 'Aromatics' },
      { item: 'Shahi Garam Masala (Mace, Cardamom, Shahi Jeera, Cloves)', baseAmount: 15, unit: 'g', notes: 'Freshly ground', category: 'Spices' },
      { item: 'Kewra & Rose Floral Water', baseAmount: 10, unit: 'ml', notes: 'Subtle aromatic drops', category: 'Garnish' },
      { item: 'Whole Wheat Dough Ring', baseAmount: 200, unit: 'g', notes: 'For sealing the pot lid tightly', category: 'Dough' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'The Royal Marinade (Pehla Dum)',
        durationMinutes: 240,
        durationLabel: '4 hrs',
        description: 'Toss meat with raw green papaya paste, ginger-garlic paste, curd, shahi garam masala, Kashmiri chili, mint, cilantro, and half the fried onions. Massage vigorously for 10 minutes. Marinate chilled for at least 4 hours.',
        keyTechnique: 'Green papaya contains papain enzymes that tenderize collagen bonds naturally.'
      },
      {
        stepNumber: 2,
        title: 'Rice Staged Par-Boil',
        durationMinutes: 15,
        durationLabel: '15 min',
        description: 'Bring 4 liters of water to a rolling boil with star anise, black cardamom, cinnamon sticks, and generous sea salt (should taste like seawater). Add soaked basmati. Boil for exactly 5 minutes until 70% cooked (soft exterior, firm uncooked chalky core). Drain immediately.',
        keyTechnique: 'Draining at precisely 70% prevents soggy overcooked grains during steam phase.'
      },
      {
        stepNumber: 3,
        title: 'Layering the Handi (Taha Lagana)',
        durationMinutes: 15,
        durationLabel: '15 min',
        description: 'Grease handi base with ghee. Spread raw marinated meat evenly on the floor. Spread the hot drained basmati over the meat in an even hill. Scatter remaining birista, mint, cilantro, saffron-infused milk, warm ghee, and drops of kewra water over top.',
        keyTechnique: 'Saffron milk drizzle creates the signature contrast of white, yellow, and orange grains.'
      },
      {
        stepNumber: 4,
        title: 'Dough Purdah Sealing',
        durationMinutes: 10,
        durationLabel: '10 min',
        description: 'Roll whole wheat flour dough into a thick rope. Press firmly along the rim of the pot. Press the heavy lid down hard onto the dough to create an airtight pneumatic gasket.',
        keyTechnique: 'An unbroken dough seal ensures zero vapor escapes during the process.'
      },
      {
        stepNumber: 5,
        title: 'High Heat to Diffuser Dum',
        durationMinutes: 50,
        durationLabel: '50 min',
        description: 'Place pot on direct high flame for 12 minutes to initiate boiling inside. Place a heavy cast iron tawa underneath as a heat shield and reduce flame to absolute minimum. Cook for 35 minutes. Turn off heat and rest untouched for 15 minutes before cutting the seal.',
        keyTechnique: 'The tawa heat diffuser prevents bottom scorching while maintaining gentle convection.'
      }
    ],
    proTips: [
      'When dishing biryani, slice down vertically with a flat saucier spoon rather than stirring, preserving distinct white and golden grain sections.',
      'Never skip the resting period after cooking; opening immediately causes flash evaporation that dries out meat fibers.',
      'Serve alongside cooling cucumber-cumin raita and peanut-sesame Mirchi ka Salan.'
    ],
    winePairing: {
      beverage: 'Off-dry Gewürztraminer or Spiced Darjeeling Black Tea',
      vintageOrRegion: 'Alsace, France',
      tastingNote: 'Lychee, rose petal, and residual sweetness soften the fiery green chilies and embrace saffron perfume.'
    },
    nutrition: {
      calories: 740,
      protein: '38g',
      carbs: '68g',
      fat: '32g'
    },
    tags: ['Biryani', 'Indian', 'Rice', 'Spices', 'Royal Cuisine']
  },
  {
    slug: 'crispy-skin-salmon',
    title: 'Crispy Skin Wild Salmon with Brown Butter Capers',
    subtitle: 'Cast iron sear mechanics, rendering subcutaneous fat, and nutty lemon-herb beurre noisette',
    category: 'Coastal & Seafood',
    author: {
      name: 'Chef Marcus Lindqvist',
      role: 'Nordic Seafood Purveyor',
      bio: 'Former head chef at coastal fish pavilions across the Gothenburg archipelago.'
    },
    publishedDate: 'October 1, 2026',
    readTimeMinutes: 7,
    heroImage: '/src/assets/images/crispy_salmon_1791771055740.jpg',
    imageCaption: 'Fig. 6 — Wild King Salmon fillet with crackling glass-like skin over charred tender asparagus and caper beurre noisette.',
    summary: 'The secret to restaurant-grade salmon is moisture elimination, continuous skin contact pressure, and gentle unilateral heat.',
    origin: 'West Coast, Sweden / Pacific Northwest',
    difficulty: 'Intermediate',
    prepTime: '20 min',
    cookTime: '10 min',
    servingsBase: 2,
    layoutTheme: 'coastal-plating',
    introProse: [
      'Few pleasures in modern culinary craft equal the auditory crackle of a crisp salmon skin yielding under the tip of a fork, revealing translucent, buttery, medium-rare coral flesh below.',
      'Yet home kitchens routinely fall into the grey salmon trap: soggy skin stuck to the pan, overcooked albumin proteins weeping white curd, and dried-out fibers. Achieving perfection is an exact physical discipline of surface dehydration and unilateral cooking.'
    ],
    culinaryScience: {
      headline: 'Unilateral Heat Conduction & Albumin Prevention',
      explanation: 'Salmon skin is lined with subcutaneous lipid layers rich in omega-3s. Cooking 85% of the total duration skin-side-down allows this fat to slowly render into the pan, essentially shallow-frying the skin in its own essence. Keeping the internal core below 50°C (122°F) prevents muscle contraction from squeezing white albumin proteins to the surface.'
    },
    equipment: [
      'Heavy cast iron or carbon steel skillet',
      'Flexible fish spatula with thin beveled edge',
      'Paper towels for dry-curing',
      'Kitchen tweezers for pin bones'
    ],
    ingredients: [
      { item: 'Wild King or Sockeye Salmon Fillets (skin-on)', baseAmount: 360, unit: 'g', notes: '2 center-cut portions, scaled and pin-boned', category: 'Main' },
      { item: 'Flaky Sea Salt (Maldon)', baseAmount: 6, unit: 'g', notes: 'For crunch and clean seasoning', category: 'Garnish' },
      { item: 'Unsalted High-Fat Cultured Butter', baseAmount: 50, unit: 'g', notes: 'For rich beurre noisette', category: 'Sauce' },
      { item: 'Nonpareil Capers (drained & dried)', baseAmount: 25, unit: 'g', notes: 'Fried crisp in hot butter', category: 'Sauce' },
      { item: 'Fresh Lemon Juice & Zest', baseAmount: 1, unit: 'lemon', notes: 'Bright acid counterpoint', category: 'Sauce' },
      { item: 'Fresh Dill Sprigs', baseAmount: 10, unit: 'g', notes: 'Roughly torn', category: 'Garnish' },
      { item: 'Tender Green Asparagus Spears', baseAmount: 200, unit: 'g', notes: 'Trimmed and charred in pan drippings', category: 'Main' },
      { item: 'High-Smoke Neutral Oil (Avocado or Grapeseed)', baseAmount: 15, unit: 'ml', notes: 'Thin film for pan sear', category: 'Sauce' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Skin Desiccation & Pin Bone Check',
        durationMinutes: 20,
        durationLabel: '20 min',
        description: 'Run fingers against the grain of the flesh to detect pin bones and remove with tweezers. Using the back of your knife blade, scrape excess moisture off the skin. Place uncovered in refrigerator on paper towels for 20 minutes to air-dry skin.',
        keyTechnique: 'A dry surface eliminates surface steam that prevents crisping.'
      },
      {
        stepNumber: 2,
        title: 'The Press-Down Sear (Skin-Side Down)',
        durationMinutes: 6,
        durationLabel: '6 min',
        description: 'Heat cast iron pan over medium-high heat with a whisper of oil until shimmering. Season skin with fine salt. Place fish skin-side down and immediately press flat with fish spatula for 45 seconds to counter skin curl. Reduce heat to medium and let sizzle undisturbed for 5 minutes.',
        keyTechnique: 'Immediate spatula pressure prevents curling so the entire skin retains direct pan contact.'
      },
      {
        stepNumber: 3,
        title: 'The Flip & Flash Kiss',
        durationMinutes: 1,
        durationLabel: '1 min',
        description: 'Watch the opaque cooking line ascend the side of the fillet. When it reaches 80% to the top, flip fish gently. Cook flesh side for only 45–60 seconds. Remove immediately to a warm wire rack skin-side-up to preserve crispiness.',
        keyTechnique: 'Resting on a wire rack keeps rising steam from softening the skin.'
      },
      {
        stepNumber: 4,
        title: 'Charring Asparagus',
        durationMinutes: 3,
        durationLabel: '3 min',
        description: 'Toss trimmed asparagus spears into the remaining hot pan drippings. Char quickly for 3 minutes until tender-crisp with blistered edges. Season with salt and plate.',
        keyTechnique: 'High heat charring locks in snap and sweetness.'
      },
      {
        stepNumber: 5,
        title: 'Nutty Beurre Noisette Pan Sauce',
        durationMinutes: 3,
        durationLabel: '3 min',
        description: 'Wipe pan briefly. Add cultured butter over medium heat. Swirl as milk solids foam and turn deep golden brown with a hazelnut aroma. Immediately add drained capers (they will sputter), remove from heat, squeeze lemon juice, and stir in fresh dill.',
        keyTechnique: 'Lemon juice stops butter browning at the exact sweet hazelnut stage.'
      }
    ],
    proTips: [
      'Never place a lid on the pan when searing salmon; trapped steam will destroy skin crispness.',
      'Spoon your brown butter sauce over the plate or fish flesh, never over the crispy skin itself.',
      'Wild salmon is far leaner than farmed Atlantic varieties; take care not to overshoot 50°C internal temp.'
    ],
    winePairing: {
      beverage: 'Chablis Premier Cru or Crisp Grüner Veltliner',
      vintageOrRegion: 'Burgundy, France',
      tastingNote: 'Steely minerality and vibrant acidity cut through rich browned butter while honoring delicate wild salmon.'
    },
    nutrition: {
      calories: 460,
      protein: '36g',
      carbs: '8g',
      fat: '31g'
    },
    tags: ['Seafood', 'Salmon', 'Fish', 'Quick Dinner', 'Fine Dining']
  },
  {
    slug: 'basque-burnt-cheesecake',
    title: 'Velvety Basque Burnt Cheesecake',
    subtitle: 'High-heat Maillard caramelization, molten center custard, parchment folds & flaky sea salt',
    category: 'Heritage Desserts',
    author: {
      name: 'Sofia Arrieta',
      role: 'San Sebastián Pastry Chef',
      bio: 'Crafting pintxos and traditional Basque confections in the old quarter of Donostia.'
    },
    publishedDate: 'September 28, 2026',
    readTimeMinutes: 8,
    heroImage: '/src/assets/images/basque_cheesecake_1791771066528.jpg',
    imageCaption: 'Fig. 7 — Slice of tarta de queso featuring deeply scorched amber top and lava-like creamy core.',
    summary: 'Originating from La Viña in San Sebastián, this cheesecake intentionally defies traditional water baths, baking at blisteringly high heat to create a caramelized shell and a soft, trembling center.',
    origin: 'San Sebastián, Basque Country, Spain',
    difficulty: 'Beginner',
    prepTime: '15 min',
    cookTime: '38 min',
    servingsBase: 8,
    layoutTheme: 'patisserie',
    introProse: [
      'Forget dense, heavy New York cheesecakes bound by graham cracker crusts and pampered in delicate bain-marie water baths. The Basque burnt cheesecake (tarta de queso) is an unapologetic rebel.',
      'Baked in crumpled parchment at an aggressive 220°C (430°F), its crown blisters into dark mahogany caramel while the interior remains a decadent, oozing cream custard that trembles when touched.'
    ],
    culinaryScience: {
      headline: 'Extreme Thermal Gradient & Controlled Egg Coagulation',
      explanation: 'By subjecting high-fat dairy to fierce convective heat, outer sugars and dairy solids undergo rapid caramelization and pyrolysis, developing toasted butter and crème brûlée nuances. Because the bake time is short, heat penetration slows at the core, preventing egg proteins from tightening into a rubbery curd.'
    },
    equipment: [
      '9-inch springform pan (deep 3-inch sides)',
      'Heavy unbleached parchment paper (2 large sheets)',
      'Stand mixer with paddle attachment or food processor',
      'Instant-read probe thermometer'
    ],
    ingredients: [
      { item: 'Full-Fat Cream Cheese (Philadelphia style)', baseAmount: 900, unit: 'g', notes: 'Strictly at room temperature', category: 'Main' },
      { item: 'Granulated White Sugar', baseAmount: 320, unit: 'g', notes: 'Caramelizes into dark amber crown', category: 'Main' },
      { item: 'Whole Large Eggs (room temp)', baseAmount: 6, unit: 'whole', notes: 'Whisked in one by one', category: 'Main' },
      { item: 'Heavy Whipping Cream (38% fat)', baseAmount: 480, unit: 'ml', notes: 'Rich, luxurious texture', category: 'Main' },
      { item: 'All-Purpose Flour', baseAmount: 30, unit: 'g', notes: 'Delicate structural starch binder', category: 'Dough' },
      { item: 'Pure Vanilla Bean Paste', baseAmount: 10, unit: 'g', notes: 'Flecked with Madagascar seeds', category: 'Garnish' },
      { item: 'Flaky Sea Salt (Maldon)', baseAmount: 4, unit: 'g', notes: 'For finish dusting', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Parchment Rustic Lining',
        durationMinutes: 10,
        durationLabel: '10 min',
        description: 'Preheat oven to 220°C (430°F). Take 2 sheets of parchment paper, crumple them aggressively under hands, then smooth out and nestle inside the 9-inch springform pan, overlapping them. Leave 2 inches of rustic crumpled paper protruding above the rim.',
        keyTechnique: 'Crumpling parchment makes it pliable so it fits pan contours without tearing.'
      },
      {
        stepNumber: 2,
        title: 'Cream Cheese & Sugar Emulsion',
        durationMinutes: 5,
        durationLabel: '5 min',
        description: 'Using paddle attachment on stand mixer on low speed, beat room-temperature cream cheese and sugar together for 3 minutes until sugar dissolves and mixture is completely silken. Do not whip on high speed to avoid incorporating excess air.',
        keyTechnique: 'Low-speed mixing prevents unwanted aeration that would cause the cake to sink prematurely.'
      },
      {
        stepNumber: 3,
        title: 'Egg Addition & Liquid Pour',
        durationMinutes: 5,
        durationLabel: '5 min',
        description: 'Add eggs one at a time, incorporating fully before the next. Sift flour over the batter and fold gently. Stream in heavy cream and vanilla bean paste. Mix until homogenous.',
        keyTechnique: 'Adding eggs gradually creates a stable emulsion that bakes evenly.'
      },
      {
        stepNumber: 4,
        title: 'High-Heat Scorching Bake',
        durationMinutes: 38,
        durationLabel: '38 min',
        description: 'Pour batter into prepared pan and tap on counter to release surface bubbles. Bake on middle rack for 36–40 minutes. The top should be deeply caramelized dark amber to nearly black in spots, puffed like a soufflé, but the center must have a distinct, pronounced jiggle.',
        keyTechnique: 'Pull the cake when the center wobbles like panna cotta; it firms up as it cools.'
      },
      {
        stepNumber: 5,
        title: 'Room-Temperature Settling',
        durationMinutes: 180,
        durationLabel: '3 hrs',
        description: 'Cool at room temperature for 3 to 4 hours. Do not refrigerate if you want a molten center; room-temperature serving produces the classic flowing texture of San Sebastián.',
        keyTechnique: 'Refrigerating Basque cheesecake firms the fat into a solid block; serve at room temp.'
      }
    ],
    proTips: [
      'Do not fear the dark scorched top! That bitterness balances the rich sweetness of the cream.',
      'Always ensure cream cheese and eggs are at true room temperature (21°C) to avoid lumpy batter.',
      'Sprinkle flaky sea salt over each slice right before serving to elevate dairy sweetness.'
    ],
    winePairing: {
      beverage: 'Pedro Ximénez Sherry or Basque Txakoli',
      vintageOrRegion: 'Jerez / Getaria, Spain',
      tastingNote: 'Rich fig and dried date notes in Sherry mirror the caramelized top; or effervescent Txakoli clears the palate.'
    },
    nutrition: {
      calories: 510,
      protein: '9g',
      carbs: '37g',
      fat: '38g'
    },
    tags: ['Dessert', 'Baking', 'Cheesecake', 'Spanish', 'Pastry']
  },
  {
    slug: 'vietnamese-pho-bo',
    title: 'Traditional Vietnamese Phở Bò',
    subtitle: 'Charred ginger aromatics, Saigon cinnamon, star anise & 12-hour simmered beef marrow stock',
    category: 'Southeast Asian',
    author: {
      name: 'Nguyen Thi Mai',
      role: 'Hanoi Heritage Chef',
      bio: 'Third-generation pho practitioner honoring classical northern Vietnamese techniques.'
    },
    publishedDate: 'September 24, 2026',
    readTimeMinutes: 10,
    heroImage: '/src/assets/images/vietnamese_pho_1791771080958.jpg',
    imageCaption: 'Fig. 8 — Amber, crystal-clear Phở Bò broth laden with tender brisket, rice noodles, fresh Thai basil, and lime.',
    summary: 'The heart of Vietnamese phở lies in an amber-tinted crystal broth perfumed with toasted warming spices and sweet rock sugar.',
    origin: 'Hanoi, Vietnam',
    difficulty: 'Advanced',
    prepTime: '1 hr',
    cookTime: '12 hrs',
    servingsBase: 6,
    layoutTheme: 'noodle-broth',
    introProse: [
      'In the dawn mist of Hanoi, streets awaken to the celestial fragrance of simmering beef knuckles, charred shallots, and toasted cassia bark drifting from street-corner cauldrons.',
      'Unlike tonkotsu’s milky turbulence, Northern Vietnamese phở demands utter clarity. It is a broth of supreme balance: sweet from clean marrow, deeply savory from fish sauce, and illuminated with warm botanical notes.'
    ],
    culinaryScience: {
      headline: 'Clarification by Gentle Convection & Fish Sauce Volatility',
      explanation: 'Maintaining stock at a gentle 88–92°C simmer allows heavy bone particles to sink rather than pulverize. Adding fermented fish sauce (nước mắm) too early destroys its delicate floral amino acids through prolonged evaporation; it must be stirred in during the final 30 minutes of extraction.'
    },
    equipment: [
      '12-quart stockpot',
      'Gas burner for open-flame charring',
      'Fine spice bag or cotton cheesecloth',
      'Large wire skimmer'
    ],
    ingredients: [
      { item: 'Beef Marrow & Knuckle Bones', baseAmount: 2400, unit: 'g', notes: 'Soaked in salted cold water', category: 'Broth' },
      { item: 'Beef Brisket or Flank (whole piece)', baseAmount: 800, unit: 'g', notes: 'Simmered in broth then sliced thin', category: 'Main' },
      { item: 'Sirloin or Eye of Round (for tái)', baseAmount: 300, unit: 'g', notes: 'Sliced paper-thin while chilled', category: 'Main' },
      { item: 'Yellow Onions & Large Shallots', baseAmount: 4, unit: 'whole', notes: 'Charred black on direct open flame', category: 'Aromatics' },
      { item: 'Fresh Ginger Root (thick knobs)', baseAmount: 120, unit: 'g', notes: 'Charred until blistered and bruised', category: 'Aromatics' },
      { item: 'Star Anise Pods', baseAmount: 6, unit: 'whole', notes: 'Dry toasted in skillet', category: 'Spices' },
      { item: 'Saigon Cinnamon Bark', baseAmount: 1, unit: 'stick', notes: 'Toasted until fragrant', category: 'Spices' },
      { item: 'Black Cardamom Pod (Thảo quả)', baseAmount: 2, unit: 'pods', notes: 'Lightly cracked', category: 'Spices' },
      { item: 'Yellow Rock Sugar', baseAmount: 35, unit: 'g', notes: 'Imparts round, mellow sweetness', category: 'Sauce' },
      { item: 'High-Grade Fish Sauce (Nước mắm 40°N)', baseAmount: 90, unit: 'ml', notes: 'Added at the finish', category: 'Sauce' },
      { item: 'Fresh Flat Rice Noodles (Bánh phở)', baseAmount: 700, unit: 'g', notes: 'Blanched in hot water for 15 seconds', category: 'Main' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Bone Bleed & Initial Parboil',
        durationMinutes: 30,
        durationLabel: '30 min',
        description: 'Cover beef bones with cold salted water for 1 hour to draw out residual blood. Bring to a rolling boil for 10 minutes, skimming scum. Dump out water, rinse each bone thoroughly under cold water.',
        keyTechnique: 'Pre-boiling bones rids the stock of cloudy particulates.'
      },
      {
        stepNumber: 2,
        title: 'Open-Flame Charring of Aromatics',
        durationMinutes: 20,
        durationLabel: '20 min',
        description: 'Place whole unpeeled onions, shallots, and ginger knobs directly over an open gas burner flame until black and charred on all sides. Scrape off excess charred skin under water and smash ginger with a cleaver.',
        keyTechnique: 'Charring caramelizes natural alliums and imparts the iconic smokiness to phở broth.'
      },
      {
        stepNumber: 3,
        title: 'The Clear Simmer & Brisket Poach',
        durationMinutes: 600,
        durationLabel: '10 hrs',
        description: 'Return cleaned bones and whole brisket to pot with fresh water. Simmer at 90°C (never boil) for 10 hours, skimming foam. Remove brisket after 2.5 hours when fork-tender, plunge in ice water to prevent darkening, and slice thin.',
        keyTechnique: 'Ice bathing boiled brisket seals in juiciness and keeps the meat firm.'
      },
      {
        stepNumber: 4,
        title: 'Spices Toasting & Final Infusion',
        durationMinutes: 60,
        durationLabel: '60 min',
        description: 'Dry toast star anise, cinnamon stick, black cardamom, coriander seeds, and fennel seeds until fragrant. Tie in cheesecloth sachet and drop into broth for the final 60 minutes. Stir in yellow rock sugar and fish sauce.',
        keyTechnique: 'Do not leave spices in for hours; 60 minutes avoids overpowering the clean marrow.'
      },
      {
        stepNumber: 5,
        title: 'Bowl Assembly with Hot Broth',
        durationMinutes: 5,
        durationLabel: '5 min',
        description: 'Warm deep bowls with hot water. Blanch rice noodles for 15 seconds and divide into bowls. Arrange cooked brisket slices and raw thinly sliced sirloin across noodles. Ladle boiling broth directly over raw beef to flash-cook it to medium-rare. Garnish with scallions and culantro.',
        keyTechnique: 'Pouring scalding broth directly onto raw beef gently cooks it to buttery tenderness.'
      }
    ],
    proTips: [
      'Do not squirt hoisin sauce or sriracha straight into your bowl on first bite; taste the nuanced broth first.',
      'Yellow rock sugar provides a gentle, clean sweetness that granulated white sugar can never replicate.',
      'Serve with torn saw-tooth herb (ngò gai / culantro) alongside Thai basil for northern authenticity.'
    ],
    winePairing: {
      beverage: 'Dry Riesling or Jasmine Green Tea',
      vintageOrRegion: 'Mosel, Germany',
      tastingNote: 'Crisp green apple and mineral slate balance the rich beef marrow and complement star anise botanicals.'
    },
    nutrition: {
      calories: 540,
      protein: '38g',
      carbs: '62g',
      fat: '16g'
    },
    tags: ['Pho', 'Vietnamese', 'Soup', 'Noodles', 'Beef']
  },
  {
    slug: 'tagliatelle-al-tartufo',
    title: 'Handmade Tagliatelle al Tartufo',
    subtitle: 'Golden yolk pasta ribbons, cultured butter emulsion, and shaved autumn black truffles',
    category: 'Handmade Pasta',
    author: {
      name: 'Chef Gianluigi Morandi',
      role: 'Emilian Sfoglino Master',
      bio: 'Crafting rolled pasta sheets by rolling pin in Bologna for over 25 years.'
    },
    publishedDate: 'September 20, 2026',
    readTimeMinutes: 8,
    heroImage: '/src/assets/images/tagliatelle_tartufo_1791771126832.jpg',
    imageCaption: 'Fig. 9 — Hand-cut egg tagliatelle tossed in glossy mountain butter and showered with black truffle flakes.',
    summary: 'True tagliatelle requires no machine extrusion—only a wooden mattarello, high-carotenoid farm egg yolks, and the gentle friction of untreated beechwood.',
    origin: 'Emilia-Romagna / Umbria, Italy',
    difficulty: 'Intermediate',
    prepTime: '1 hr',
    cookTime: '3 min',
    servingsBase: 4,
    layoutTheme: 'artisan-baker',
    introProse: [
      'To stand before a massive wooden pastry board in Bologna and roll a sheet of golden sfoglia until translucent enough to read a newspaper through it is one of culinary history’s greatest quiet meditations.',
      'When this egg-rich pasta is cut into exact 6.5mm ribbons and twirled through alpine cultured butter, starchy pasta water, and black winter truffles, it requires nothing else in the world to be complete.'
    ],
    culinaryScience: {
      headline: 'Carotenoid Fat Emulsification & Micro-Porosity of Wood',
      explanation: 'Rolling pasta dough on porous beechwood creates micro-abrasions and a rough matte surface (rugosità) that clings to sauce exponentially better than slick stainless steel rollers. When hot pasta water containing dissolved amylose starches is agitated with melted cultured butter, it forms a glossy, stable sauce emulsion.'
    },
    equipment: [
      'Wooden pastry rolling board (tagliere)',
      'Long beechwood rolling pin (mattarello)',
      'Brass pasta cutter or sharp chef’s knife',
      'Truffle slicer with micro-adjustable blade'
    ],
    ingredients: [
      { item: 'Tipo 00 Italian Soft Wheat Flour', baseAmount: 300, unit: 'g', notes: 'Fine grain, low ash', category: 'Dough' },
      { item: 'High-Carotenoid Farm Egg Yolks + Whole Eggs', baseAmount: 3, unit: 'whole', notes: 'Deep amber yolks', category: 'Dough' },
      { item: 'Extra Egg Yolks', baseAmount: 2, unit: 'yolks', notes: 'For rich velvet elasticity', category: 'Dough' },
      { item: 'Cultured Alpine Unsalted Butter', baseAmount: 80, unit: 'g', notes: 'High butterfat (84%)', category: 'Sauce' },
      { item: 'Fresh Black Autumn or Winter Truffle (Tuber uncinatum)', baseAmount: 30, unit: 'g', notes: 'Cleaned with a soft bristle brush', category: 'Main' },
      { item: '24-Month Parmigiano-Reggiano D.O.P.', baseAmount: 60, unit: 'g', notes: 'Microplaned fresh', category: 'Garnish' },
      { item: 'Coarse Sea Salt (for boiling water)', baseAmount: 20, unit: 'g', notes: 'For pasta salinity', category: 'Sauce' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Flour Fountain & Yolk Incorporation',
        durationMinutes: 15,
        durationLabel: '15 min',
        description: 'Mound flour on wooden board and make a wide crater in the center. Crack whole eggs and extra yolks into well. Whisk eggs with fork, gradually incorporating flour from inner walls until thick slurry forms.',
        keyTechnique: 'Maintaining wall integrity keeps liquid yolks from spilling across the counter.'
      },
      {
        stepNumber: 2,
        title: 'Kneading to a Smooth Sfoglia Ball',
        durationMinutes: 12,
        durationLabel: '12 min',
        description: 'Using heels of hands, knead dough rhythmically for 10 minutes until smooth, springy, and homogenous with small air pockets visible when sliced. Wrap tightly in plastic film and rest 30 minutes at room temp.',
        keyTechnique: 'Resting relaxes gluten tensile tension, making rolling effortless.'
      },
      {
        stepNumber: 3,
        title: 'Rolling the Sfoglia by Hand',
        durationMinutes: 20,
        durationLabel: '20 min',
        description: 'Flour board lightly. Use rolling pin to flatten dough, rotating 90 degrees after every pass. Roll dough around pin and stretch gently outward with forearms until paper-thin (less than 1mm). Let sheet dry on board for 10 minutes.',
        keyTechnique: 'Slight drying prevents pasta ribbons from sticking together when cut.'
      },
      {
        stepNumber: 4,
        title: 'Folding & Cutting Tagliatelle',
        durationMinutes: 10,
        durationLabel: '10 min',
        description: 'Roll the pasta sheet loosely from top and bottom toward center. With a long sharp knife, cut into ribbons exactly 6.5mm wide. Slide knife underneath and lift into the air to unfurl the nests.',
        keyTechnique: 'Loose rolling ensures ribbons separate cleanly without clumping.'
      },
      {
        stepNumber: 5,
        title: 'The Truffle-Butter Mantecatura',
        durationMinutes: 4,
        durationLabel: '4 min',
        description: 'Boil tagliatelle in salted water for 90 to 120 seconds. In a warm pan over lowest heat, melt butter with 4 tablespoons of pasta cooking water. Toss hot drained tagliatelle vigorously to emulsify. Remove from heat, fold in Parmigiano-Reggiano, plate, and shave fresh black truffle generously on top.',
        keyTechnique: 'Never cook the truffle; heat releases truffle aroma best when shaved on warm pasta.'
      }
    ],
    proTips: [
      'Store your fresh truffles in a jar with your uncooked eggs for 48 hours beforehand; truffle aroma permeates the porous eggshells!',
      'Do not boil the butter vigorously with the pasta; gentle mantecatura agitation off-heat preserves creamy viscosity.',
      'Cut your ribbons cleanly in a single downward slicing stroke rather than dragging the knife blade.'
    ],
    winePairing: {
      beverage: 'Barolo or Nebbiolo d’Alba',
      vintageOrRegion: 'Piedmont, Italy',
      tastingNote: 'Earthy forest floor aromas and structured tannins form a divine marriage with rich egg pasta and pungent truffle.'
    },
    nutrition: {
      calories: 490,
      protein: '18g',
      carbs: '58g',
      fat: '22g'
    },
    tags: ['Pasta', 'Italian', 'Truffle', 'Handmade', 'Comfort Food']
  },
  {
    slug: 'mediterranean-mezze-feast',
    title: 'Vibrant Mediterranean Mezze Feast',
    subtitle: 'Smoky charred baba ganoush, herbaceous green falafel, whipped feta & warm sumac flatbreads',
    category: 'Mediterranean Feast',
    author: {
      name: 'Chef Zaid Al-Mansoor',
      role: 'Levantine Culinary Historian',
      bio: 'Championing wood-fired communal dining traditions across Beirut and Amman.'
    },
    publishedDate: 'September 15, 2026',
    readTimeMinutes: 9,
    heroImage: '/src/assets/images/mediterranean_mezze_1791771138089.jpg',
    imageCaption: 'Fig. 10 — Sun-drenched terrace spread of charred baba ganoush, crisp herbed falafel, and whipped feta.',
    summary: 'Mezze is an expansive culinary philosophy of hospitality: contrasting temperatures, textures, smoke, and vibrant herbs designed for sharing.',
    origin: 'Eastern Mediterranean & Levant',
    difficulty: 'Intermediate',
    prepTime: '45 min',
    cookTime: '30 min',
    servingsBase: 6,
    layoutTheme: 'mezze-gathering',
    introProse: [
      'In the culinary geography of the Levant, eating is never solitary. A mezze table is a lavish mosaic of earthenware plates that encourages slow conversation and unhurried dipping.',
      'Here, humble ingredients—eggplants charred until they collapse in their own smoky skins, soaked raw chickpeas blended with fresh parsley and coriander, and tangy sheep feta whipped with raw honey—become transcendent.'
    ],
    culinaryScience: {
      headline: 'Soaked-Raw Legume Frying & Emulsified Sesame Tahini',
      explanation: 'Authentic falafel must never use canned cooked chickpeas; cooked legumes turn to mush when fried. Raw soaked chickpeas retain starch granules that gelatinize only during the 3-minute fry, ensuring an ethereal, crunchy shell and fluffy green crumb. Sesame tahini emulsifies when whipped with cold lemon water due to its natural lecithins.'
    },
    equipment: [
      'Food processor or meat grinder',
      'Gas flame or charcoal grill for eggplants',
      'Deep fry thermometer',
      'Small falafel scoop (aleb falafel) or two spoons'
    ],
    ingredients: [
      { item: 'Globe Eggplants', baseAmount: 2, unit: 'whole', notes: 'Charred black directly on open flame', category: 'Main' },
      { item: 'Dry Raw Chickpeas (never canned)', baseAmount: 250, unit: 'g', notes: 'Soaked in water with baking soda for 18 hours', category: 'Main' },
      { item: 'Fresh Flat-Leaf Parsley & Cilantro', baseAmount: 80, unit: 'g', notes: 'Stems and leaves for vivid green interior', category: 'Aromatics' },
      { item: 'Pure Artisanal Sesame Tahini', baseAmount: 120, unit: 'g', notes: 'Stone-ground Palestinian or Lebanese', category: 'Sauce' },
      { item: 'Authentic Greek Sheep’s Milk Feta', baseAmount: 200, unit: 'g', notes: 'Tangy and briny block', category: 'Main' },
      { item: 'Greek Whole Milk Yogurt', baseAmount: 100, unit: 'g', notes: 'Adds silkiness to whipped feta', category: 'Sauce' },
      { item: 'Wild Blossom Honey & Pomegranate Arils', baseAmount: 30, unit: 'g', notes: 'Sweet contrast for feta', category: 'Garnish' },
      { item: 'Ground Cumin & Coriander Seeds', baseAmount: 12, unit: 'g', notes: 'Toasted and freshly ground', category: 'Spices' },
      { item: 'Fresh Garlic Cloves', baseAmount: 4, unit: 'cloves', notes: 'Minced with sea salt', category: 'Aromatics' },
      { item: 'Fresh Lemon Juice', baseAmount: 60, unit: 'ml', notes: 'Divided between dips', category: 'Sauce' },
      { item: 'Warm Pita Bread & Sumac', baseAmount: 6, unit: 'loaves', notes: 'Brushed with olive oil and za’atar', category: 'Main' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Open-Flame Eggplant Charring (Baba Ganoush)',
        durationMinutes: 20,
        durationLabel: '20 min',
        description: 'Pierce whole eggplants with fork. Place directly on open gas burner or glowing coals. Rotate every 4 minutes until skins are completely black and papery, and flesh is thoroughly soft. Transfer to colander for 15 minutes to drain bitter juices.',
        keyTechnique: 'Draining the liquid removes bitter water, leaving pure smoky concentrated flesh.'
      },
      {
        stepNumber: 2,
        title: 'Fork-Mashing the Eggplant with Tahini',
        durationMinutes: 10,
        durationLabel: '10 min',
        description: 'Slit eggplants open and scrape out smoky flesh, leaving charred skin behind. Mash vigorously with a fork (never food process!). Whisk in tahini, minced garlic, lemon juice, salt, and extra virgin olive oil until luscious.',
        keyTechnique: 'Fork mashing maintains rustic texture, whereas blenders turn baba ganoush into glue.'
      },
      {
        stepNumber: 3,
        title: 'Grinding the Raw Falafel Mixture',
        durationMinutes: 15,
        durationLabel: '15 min',
        description: 'Drain soaked raw chickpeas thoroughly and dry on towel. Pulse in food processor with parsley, cilantro, onion, garlic, cumin, coriander, salt, and a pinch of baking powder until the consistency of coarse wet sand. Rest dough in fridge for 30 minutes.',
        keyTechnique: 'A 30-minute chill allows starches to hydrate, binding patties without flour.'
      },
      {
        stepNumber: 4,
        title: 'Deep-Frying Crispy Falafel',
        durationMinutes: 10,
        durationLabel: '10 min',
        description: 'Heat 2 inches of neutral oil to 180°C (350°F). Shape falafel into small walnut-sized balls or discs. Gently lower into hot oil and fry for 3 to 4 minutes until mahogany crisp on the exterior and emerald green within. Drain on paper towels.',
        keyTechnique: 'Maintaining 180°C oil ensures a crisp shell before oil can soak inside.'
      },
      {
        stepNumber: 5,
        title: 'Whipped Feta & Terrace Plating',
        durationMinutes: 10,
        durationLabel: '10 min',
        description: 'In food processor, whip crumbled sheep feta, Greek yogurt, lemon zest, and olive oil for 3 minutes until light as cloud mousse. Spread into shallow bowl with the back of a spoon. Drizzle with honey and pomegranate seeds. Arrange all mezze dishes with warm za’atar pita bread.',
        keyTechnique: 'High-speed whipping transforms dense crumbly feta into airy, spreadable silk.'
      }
    ],
    proTips: [
      'Always serve falafel straight from the fryer; within 10 minutes, trapped steam begins softening the exterior crunch.',
      'Select eggplants that feel light for their size; heavy eggplants contain dense seed clusters that turn bitter.',
      'Generously dust warm pita bread with wild sumac for tart berry brightness.'
    ],
    winePairing: {
      beverage: 'Assyrtiko or Arak with Water and Ice',
      vintageOrRegion: 'Santorini, Greece / Bekaa Valley, Lebanon',
      tastingNote: 'Saline volcanic minerality and crisp citrus slices slice through creamy dips and fried falafel.'
    },
    nutrition: {
      calories: 580,
      protein: '22g',
      carbs: '64g',
      fat: '28g'
    },
    tags: ['Mediterranean', 'Mezze', 'Vegetarian', 'Healthy', 'Sharing']
  }
];
