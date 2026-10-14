export interface Ingredient {
  item: string;
  baseAmount: number;
  unit: string;
  notes?: string;
  category: 'Main' | 'Dough' | 'Aromatics' | 'Sauce' | 'Garnish' | 'Broth' | 'Spices' | 'Filling';
}

export interface CookingStep {
  stepNumber: number;
  title: string;
  durationMinutes?: number;
  durationLabel?: string;
  description: string;
  keyTechnique?: string;
}

export interface WinePairing {
  beverage: string;
  vintageOrRegion: string;
  tastingNote: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  publishedDate: string;
  readTimeMinutes: number;
  heroImage: string;
  imageCaption: string;
  summary: string;
  origin: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Masterclass';
  prepTime: string;
  cookTime: string;
  servingsBase: number;
  layoutTheme: 'artisan-baker' | 'heritage-simmer' | 'noodle-broth' | 'coastal-plating' | 'patisserie' | 'mezze-gathering';
  introProse: string[];
  culinaryScience: {
    headline: string;
    explanation: string;
  };
  equipment: string[];
  ingredients: Ingredient[];
  steps: CookingStep[];
  proTips: string[];
  winePairing: WinePairing;
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  tags: string[];
}

export interface CommentItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  comment: string;
}
