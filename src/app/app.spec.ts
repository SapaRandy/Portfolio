import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { App } from './app';
import { routes } from './app.routes';
import { BookService } from './services/book.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('crée l application', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('affiche le livre', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.livre .feuille')).toBeTruthy();
  });
});

describe('BookService', () => {
  const book = new BookService();

  it('a des slugs de projets uniques', () => {
    const slugs = book.projets.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('numérote les chapitres dans l ordre', () => {
    expect(book.chapitres.map((c) => c.numero)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('Ordre de lecture', () => {
  const book = new BookService();

  it('commence à l accueil et finit sur le dernier chapitre', () => {
    expect(book.ordreDeLecture[0]).toBe('/');
    expect(book.ordreDeLecture.at(-1)).toBe('/chapitre/contact');
  });

  it('insère les pages projets dans le chapitre III', () => {
    const iProjets = book.indexDeLecture('/chapitre/projets');
    expect(book.indexDeLecture('/projet/' + book.projets[0].slug)).toBe(iProjets + 1);
  });
});
