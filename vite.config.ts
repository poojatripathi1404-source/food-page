import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function preRenderedHtmlPlugin(): Plugin {
  return {
    name: 'serve-prerendered-html',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const cleanUrl = req.url?.split('?')[0].replace(/\/$/, '') || '';
        const routes: Record<string, string> = {
          '/recipes/fluffy-cheese-omelette': 'public/recipes/fluffy-cheese-omelette/index.html',
          '/recipes/fluffy-omelette': 'public/recipes/fluffy-cheese-omelette/index.html',
          '/recipes/healthy-chicken-dinner': 'public/recipes/healthy-chicken-dinner/index.html',
          '/recipes/healthy-chicken-recipe': 'public/recipes/healthy-chicken-dinner/index.html',
          '/recipes/vegetarian-curry': 'public/recipes/vegetarian-curry/index.html',
          '/recipes/vegetarian-curry-recipe': 'public/recipes/vegetarian-curry/index.html',
        };

        if (routes[cleanUrl]) {
          const filePath = path.resolve(routes[cleanUrl]);
          if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf-8');
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(content);
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [preRenderedHtmlPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
