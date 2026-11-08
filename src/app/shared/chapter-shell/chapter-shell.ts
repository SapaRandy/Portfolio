import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BookService } from '../../services/book.service';

/**
 * Gabarit commun à tous les chapitres : en-tête (numéro, titre),
 * contenu projeté (ng-content) et navigation page précédente / suivante.
 */
@Component({
  selector: 'app-chapter-shell',
  imports: [RouterLink],
  templateUrl: './chapter-shell.html',
  styleUrl: './chapter-shell.scss',
})
export class ChapterShell {
  /** Slug du chapitre courant, fourni par la page qui utilise le gabarit. */
  readonly slug = input.required<string>();

  private readonly book = inject(BookService);

  readonly chapitre = computed(() => this.book.chapitreParSlug(this.slug()));
  readonly numeral = computed(() =>
    this.book.enChiffresRomains(this.chapitre()?.numero ?? 0),
  );
  readonly precedent = computed(() => {
    const index = this.book.indexDuChapitre(this.slug());
    return index > 0 ? this.book.chapitres[index - 1] : null;
  });
  readonly suivant = computed(() => {
    const index = this.book.indexDuChapitre(this.slug());
    return index >= 0 && index < this.book.chapitres.length - 1
      ? this.book.chapitres[index + 1]
      : null;
  });
}
