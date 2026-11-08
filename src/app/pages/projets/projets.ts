import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BookService } from '../../services/book.service';
import { ChapterShell } from '../../shared/chapter-shell/chapter-shell';

/** Chapitre 3 — liste des projets, chacun avec sa propre page. */
@Component({
  selector: 'app-projets',
  imports: [ChapterShell, RouterLink],
  templateUrl: './projets.html',
  styleUrl: './projets.scss',
})
export class Projets {
  private readonly book = inject(BookService);

  readonly projets = this.book.projets;
}
