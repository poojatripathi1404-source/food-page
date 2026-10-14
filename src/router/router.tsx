import { useState, useEffect, useCallback, createContext, useContext } from 'react';

export interface RouteMatch {
  pathname: string;
  route: 'home' | 'blog-detail' | 'recipes' | 'about' | 'bookmarks' | 'category';
  params: Record<string, string>;
}

export function parseCurrentRoute(): RouteMatch {
  // Check hash first if present (e.g., #/blog/some-slug or #blog/some-slug)
  const hash = window.location.hash.replace(/^#\/?/, '');
  const pathname = hash ? `/${hash}` : (window.location.pathname || '/');

  // Match /recipes/:slug (clean lowercase and hyphens)
  const recipeDetailMatch = pathname.match(/^\/recipes\/([^/?#]+)/);
  if (recipeDetailMatch && recipeDetailMatch[1] !== '') {
    let slug = recipeDetailMatch[1];
    // Aliases for friendly URLs
    if (slug === 'fluffy-omelette') slug = 'fluffy-cheese-omelette';
    if (slug === 'healthy-chicken-recipe') slug = 'healthy-chicken-dinner';
    if (slug === 'vegetarian-curry-recipe') slug = 'vegetarian-curry';

    return {
      pathname,
      route: 'blog-detail',
      params: { slug },
    };
  }

  // Match /blog/:slug
  const blogMatch = pathname.match(/^\/blog\/([^/?#]+)/);
  if (blogMatch) {
    let slug = blogMatch[1];
    if (slug === 'fluffy-omelette') slug = 'fluffy-cheese-omelette';
    return {
      pathname,
      route: 'blog-detail',
      params: { slug },
    };
  }

  // Match /category/:category
  const categoryMatch = pathname.match(/^\/category\/([^/?#]+)/);
  if (categoryMatch) {
    return {
      pathname,
      route: 'category',
      params: { category: decodeURIComponent(categoryMatch[1]) },
    };
  }

  // Match /recipes exact
  if (pathname === '/recipes' || pathname === '/recipes/') {
    return {
      pathname,
      route: 'recipes',
      params: {},
    };
  }

  // Match /about
  if (pathname.startsWith('/about')) {
    return {
      pathname,
      route: 'about',
      params: {},
    };
  }

  // Match /bookmarks
  if (pathname.startsWith('/bookmarks')) {
    return {
      pathname,
      route: 'bookmarks',
      params: {},
    };
  }

  // Default to home
  return {
    pathname: '/',
    route: 'home',
    params: {},
  };
}

interface RouterContextType {
  route: RouteMatch;
  navigate: (to: string) => void;
  canonicalUrl: string;
}

export const RouterContext = createContext<RouterContextType>({
  route: { pathname: '/', route: 'home', params: {} },
  navigate: () => {},
  canonicalUrl: '',
});

export function useRouter() {
  return useContext(RouterContext);
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [route, setRoute] = useState<RouteMatch>(() => parseCurrentRoute());

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(parseCurrentRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Synchronize document.title and meta[name="description"] for dynamic SPA transitions
  useEffect(() => {
    let pageTitle = 'Easy Homemade Recipes & Quick Food Ideas | My Food Site';
    let metaDesc = 'Discover easy homemade recipes and fast weeknight dinner ideas. Learn step-by-step cooking techniques with pantry ingredients. Explore our kitchen guides today!';

    if (route.route === 'blog-detail') {
      const slug = route.params.slug;
      if (slug === 'fluffy-cheese-omelette' || slug === 'fluffy-omelette') {
        pageTitle = 'Fluffy Cheese Omelette Recipe | Quick Breakfast Ideas';
        metaDesc = 'Master this fluffy cheese omelette recipe in 10 minutes with simple pantry ingredients and gentle heat. Read our tested chef tips and cook breakfast now!';
      } else if (slug === 'healthy-chicken-dinner' || slug === 'healthy-chicken-recipe') {
        pageTitle = 'Healthy Chicken Recipe for Dinner | Simple Meals';
        metaDesc = 'Prepare this tender herb-roasted healthy chicken dinner in 30 minutes with crisp asparagus and lemon butter. Follow our quick step-by-step guide tonight!';
      } else if (slug === 'vegetarian-curry' || slug === 'vegetarian-curry-recipe') {
        pageTitle = 'Vegetarian Curry Recipe | Easy Main Course';
        metaDesc = 'Cook this fragrant vegetarian coconut curry loaded with tender chickpeas, spinach, and warming spices. Follow our easy 25-minute guide to make dinner today!';
      }
    } else if (route.route === 'recipes') {
      pageTitle = 'All Tested Homemade Recipes & Dinner Ideas | My Food Site';
      metaDesc = 'Browse our complete catalog of quick breakfast ideas, healthy weeknight dinners, and vegetarian curries with step-by-step masterclass instructions!';
    } else if (route.route === 'about') {
      pageTitle = 'About Our Test Kitchen & Editorial Craft | My Food Site';
      metaDesc = 'Learn about our rigorous test kitchen standards, chef instructors, and dedication to accessible, healthy homemade food ideas for home cooks.';
    }

    document.title = pageTitle;
    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'description');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', metaDesc);
  }, [route]);

  const navigate = useCallback((to: string) => {
    // Normalize to standard path
    const normalized = to.startsWith('/') ? to : `/${to}`;
    
    // Update pushState for clean HTML5 URL
    try {
      window.history.pushState({}, '', normalized);
    } catch {
      // Fallback for sandboxed iframes
      window.location.hash = normalized;
    }
    
    // Also sync hash for iframe resilience
    if (window.location.hash || window.self !== window.top) {
      window.location.hash = normalized === '/' ? '' : `#${normalized}`;
    }

    setRoute(parseCurrentRoute());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = `${origin}${route.pathname}`;

  return (
    <RouterContext.Provider value={{ route, navigate, canonicalUrl }}>
      {children}
    </RouterContext.Provider>
  );
}
