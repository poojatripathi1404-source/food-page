import React, { useState } from 'react';
import { Ingredient } from '../types';
import { Minus, Plus, Check } from 'lucide-react';

interface ServingsScalerProps {
  ingredients: Ingredient[];
  baseServings: number;
}

export const ServingsScaler: React.FC<ServingsScalerProps> = ({
  ingredients,
  baseServings,
}) => {
  const [servings, setServings] = useState<number>(baseServings);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const scaleRatio = servings / baseServings;

  const toggleCheck = (item: string) => {
    setCheckedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const formatAmount = (base: number, unit: string) => {
    const val = base * scaleRatio;
    if (unit === 'leaves' || unit === 'cloves' || unit === 'heads' || unit === 'whole' || unit === 'yolks' || unit === 'pods' || unit === 'stick' || unit === 'loaves' || unit === 'lemon') {
      const rounded = Math.round(val * 10) / 10;
      return Number.isInteger(rounded) ? `${rounded}` : rounded.toFixed(1);
    }
    if (val >= 100) return `${Math.round(val)}`;
    if (val >= 10) return `${Math.round(val * 10) / 10}`;
    return `${Math.round(val * 10) / 10}`;
  };

  // Group ingredients by category
  const categories = Array.from(new Set(ingredients.map(i => i.category)));

  return (
    <div className="bg-stone-50 border border-stone-200/90 rounded-xl p-6 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-200">
        <div>
          <h3 className="text-xl font-serif font-medium text-stone-900">
            Ingredients & Pantry Provisions
          </h3>
          <p className="text-xs text-stone-500 mt-0.5">
            Tap items to mark off as you prep in your kitchen
          </p>
        </div>

        {/* Servings Scaler Controls */}
        <div className="flex items-center gap-3 bg-white border border-stone-200 px-3 py-1.5 rounded-lg shadow-2xs self-start sm:self-auto">
          <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Servings</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setServings(Math.max(1, servings - 1))}
              disabled={servings <= 1}
              className="p-1 rounded text-stone-600 hover:text-stone-950 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Decrease servings"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-sm font-semibold text-stone-900 w-6 text-center tabular-nums">
              {servings}
            </span>
            <button
              onClick={() => setServings(Math.min(24, servings + 1))}
              disabled={servings >= 24}
              className="p-1 rounded text-stone-600 hover:text-stone-950 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Increase servings"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Ingredient groups */}
      <div className="mt-5 space-y-6">
        {categories.map(cat => {
          const catIngredients = ingredients.filter(i => i.category === cat);
          return (
            <div key={cat} className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-widest text-stone-500 border-b border-stone-200/60 pb-1">
                {cat}
              </div>
              <ul className="space-y-2.5 pt-1">
                {catIngredients.map((ing) => {
                  const isChecked = !!checkedItems[ing.item];
                  return (
                    <li
                      key={ing.item}
                      onClick={() => toggleCheck(ing.item)}
                      className={`flex items-start gap-3 text-sm cursor-pointer select-none group transition-opacity ${
                        isChecked ? 'opacity-40' : 'opacity-100'
                      }`}
                    >
                      <button
                        type="button"
                        className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center shrink-0 border transition-all ${
                          isChecked
                            ? 'bg-stone-800 border-stone-800 text-white'
                            : 'border-stone-300 bg-white group-hover:border-stone-400'
                        }`}
                        aria-label={`Toggle ${ing.item}`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </button>

                      <div className="flex-1 leading-snug">
                        <span className={`font-mono font-medium text-stone-900 tabular-nums ${isChecked ? 'line-through' : ''}`}>
                          {formatAmount(ing.baseAmount, ing.unit)} {ing.unit}
                        </span>{' '}
                        <span className={`text-stone-800 font-medium ${isChecked ? 'line-through text-stone-500' : ''}`}>
                          {ing.item}
                        </span>
                        {ing.notes && (
                          <span className="block text-xs text-stone-500 italic mt-0.5">
                            {ing.notes}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
