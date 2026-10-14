/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './router/router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { RecipesIndexPage } from './pages/RecipesIndexPage';
import { BookmarksPage } from './pages/BookmarksPage';
import { AboutPage } from './pages/AboutPage';

function AppContent() {
  const { route } = useRouter();

  let content: React.ReactNode;

  switch (route.route) {
    case 'blog-detail':
      content = <BlogDetailPage slug={route.params.slug} />;
      break;
    case 'recipes':
      content = <RecipesIndexPage />;
      break;
    case 'bookmarks':
      content = <BookmarksPage />;
      break;
    case 'about':
      content = <AboutPage />;
      break;
    case 'category':
    case 'home':
    default:
      content = <HomePage />;
      break;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900">
      <Header />
      <div className="flex-1">
        {content}
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
