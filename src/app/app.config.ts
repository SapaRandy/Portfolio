import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './app.routes';
import { tournerLaPage } from './page-turn';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // Lie automatiquement les paramètres d'URL (ex. :slug) aux input() des composants.
      withComponentInputBinding(),
      // Revient en haut de page à chaque changement de chapitre.
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
      // Animation « page qui se tourne » entre deux pages (voir page-turn.ts et styles.scss).
      withViewTransitions({
        skipInitialTransition: true,
        onViewTransitionCreated: tournerLaPage,
      }),
    ),
    provideClientHydration(withEventReplay()),
  ],
};
