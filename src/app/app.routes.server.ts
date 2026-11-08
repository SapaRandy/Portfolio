import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';

import { BookService } from './services/book.service';

export const serverRoutes: ServerRoute[] = [
  {
    // Une page HTML est prérendue pour chaque projet du chapitre III.
    path: 'projet/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      inject(BookService).projets.map((projet) => ({ slug: projet.slug })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
