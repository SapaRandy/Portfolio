import { DOCUMENT, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ViewTransitionInfo } from '@angular/router';

import { BookService } from './services/book.service';

/** Reconstitue le chemin complet (ex. /projet/site-ecommerce) d'un snapshot de route. */
function cheminDe(snapshot: ActivatedRouteSnapshot | null): string {
  const segments: string[] = [];
  let courant = snapshot;
  while (courant) {
    segments.push(...courant.url.map((segment) => segment.path));
    courant = courant.firstChild;
  }
  return '/' + segments.join('/');
}

/**
 * Appelé par le routeur au début de chaque transition de page
 * (View Transitions API). Détermine le sens de lecture pour que la
 * page se tourne vers la gauche (on avance) ou revienne (on recule).
 */
export function tournerLaPage({ transition, from, to }: ViewTransitionInfo): void {
  const book = inject(BookService);
  const document = inject(DOCUMENT);
  const fenetre = document.defaultView;

  const depart = book.indexDeLecture(cheminDe(from));
  const arrivee = book.indexDeLecture(cheminDe(to));
  const mouvementReduit = fenetre?.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  if (depart === arrivee || mouvementReduit) {
    transition.skipTransition();
    return;
  }

  const racine = document.documentElement;
  racine.dataset['sens'] = arrivee > depart ? 'avant' : 'arriere';

  // Une nouvelle page commence toujours en haut, comme dans un livre.
  fenetre?.scrollTo({ top: 0, behavior: 'instant' });

  transition.finished.finally(() => {
    delete racine.dataset['sens'];
  });
}
