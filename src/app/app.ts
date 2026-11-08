import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

import { BookService } from './services/book.service';

/**
 * Coquille du livre : couverture, tranche des pages restantes,
 * et la feuille courante (titre courant, contenu, numéro de page).
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);
  private readonly book = inject(BookService);

  /** Nombre maximal de feuillets dessinés sur la tranche (première page). */
  private readonly feuilletsParPage = 2;

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  readonly total = this.book.ordreDeLecture.length;
  readonly index = computed(() => this.book.indexDeLecture(this.url()));
  readonly numeroDePage = computed(() => this.index() + 1);
  readonly titreCourant = computed(() => this.book.titreCourant(this.url()));
  readonly estDernierePage = computed(() => this.index() === this.total - 1);

  /** Pages encore à lire après la page courante. */
  readonly pagesRestantes = computed(() => Math.max(0, this.total - 1 - this.index()));

  /**
   * La tranche du livre est dessinée avec une ombre portée par feuillet :
   * plus il reste de pages, plus la tranche est épaisse. À la dernière page,
   * il n'en reste plus aucune.
   */
  readonly tranche = computed(() => {
    const feuillets = this.pagesRestantes() * this.feuilletsParPage;
    if (feuillets === 0) {
      return '0 0 0 0 transparent';
    }
    const couches: string[] = [];
    for (let i = 1; i <= feuillets; i++) {
      const decalage = `calc(var(--pas-feuillet) * ${i})`;
      const couleur = i % 2 === 0 ? 'var(--tranche-claire)' : 'var(--tranche-foncee)';
      couches.push(`${decalage} ${decalage} 0 0 ${couleur}`);
    }
    return couches.join(', ');
  });
}
