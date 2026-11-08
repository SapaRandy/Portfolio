import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BookService } from '../../services/book.service';

/** Page d'accueil : la couverture du livre et son sommaire. */
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly book = inject(BookService);

  readonly chapitres = this.book.chapitres;
}
