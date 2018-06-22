import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromBooks from '../store/reducers';
import * as CollectionActions from '../store/actions/collection.actions';
import { Book } from '../models/book';
@Component({
  selector: 'bc-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <mat-card>
    <mat-card-title>My Collection</mat-card-title>
  </mat-card>
  <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>`,
  styles: [
    `
    mat-card-title {
      display: flex;
      justify-content: center;
    }
  `,
  ]
})
export class CollectionPageComponent implements OnInit {
  books$: Observable<Book[]>;
  constructor(private store: Store<fromBooks.State>) {
    this.books$ = store.pipe(select(fromBooks.getBookCollection));
  }

  ngOnInit() {
    this.store.dispatch(new CollectionActions.Load());
  }

}
