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

  // Match /blog/:slug
  const blogMatch = pathname.match(/^\/blog\/([^/?#]+)/);
  if (blogMatch) {
    return {
      pathname,
      route: 'blog-detail',
      params: { slug: blogMatch[1] },
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

  // Match /recipes
  if (pathname.startsWith('/recipes')) {
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
