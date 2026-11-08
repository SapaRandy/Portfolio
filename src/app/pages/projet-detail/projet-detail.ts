import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { BookService } from '../../services/book.service';

/** Page dédiée à un projet, accessible depuis le chapitre « Projets ». */
@Component({
  selector: 'app-projet-detail',
  imports: [RouterLink],
  templateUrl: './projet-detail.html',
  styleUrl: './projet-detail.scss',
})
export class ProjetDetail {
  /** Slug du projet, lié automatiquement au paramètre d'URL :slug. */
  readonly slug = input.required<string>();

  private readonly book = inject(BookService);
  private readonly title = inject(Title);

  readonly projet = computed(() => this.book.projetParSlug(this.slug()));
  readonly precedent = computed(() => {
    const index = this.book.indexDuProjet(this.slug());
    return index > 0 ? this.book.projets[index - 1] : null;
  });
  readonly suivant = computed(() => {
    const index = this.book.indexDuProjet(this.slug());
    return index >= 0 && index < this.book.projets.length - 1
      ? this.book.projets[index + 1]
      : null;
  });

  constructor() {
    // Met à jour l'onglet du navigateur avec le titre du projet affiché.
    effect(() => {
      const projet = this.projet();
      if (projet) {
        this.title.setTitle(`${projet.titre} — Portfolio de Randy Sapa`);
      }
    });
  }
}
