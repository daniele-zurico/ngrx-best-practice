import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { Store, select } from '@ngrx/store';
import * as fromBooks from '../store/reducers';
import { take } from 'rxjs/operators';
import * as BookActions from '../store/actions/book.actions';

@Component({
  selector: 'bc-find-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-search
      [query]="searchQuery$ | async"
      [searching]="loading$ | async"
      [error]="error$ | async"
      (search)="search($event)"
    ></bc-book-search>
    <bc-book-preview-list
      [books]="books$ | async"
    ></bc-book-preview-list>
  `,
})
export class FindBookPageComponent {
  searchQuery$: Observable<string>;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;
  constructor(private store: Store<fromBooks.State>) {
    this.searchQuery$ = store.pipe(select(fromBooks.getSearchQuery), take(1));
    this.books$ = store.pipe(select(fromBooks.getSearchResults));
    this.loading$ = store.pipe(select(fromBooks.getSearchLoading));
    this.error$ = store.pipe(select(fromBooks.getSearchError));
  }

  search(query: string) {
    this.store.dispatch(new BookActions.Search(query));
  }
}
