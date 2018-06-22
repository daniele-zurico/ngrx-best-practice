import { Injectable } from '@angular/core';
import { Database } from '@ngrx/db';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { defer, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, toArray } from 'rxjs/operators';

import {
  AddBook,
  AddBookFail,
  AddBookSuccess,
  CollectionActionTypes,
  LoadFail,
  LoadSuccess,
  RemoveBook,
  RemoveBookFail,
  RemoveBookSuccess,
} from './../actions/collection.actions';
import { Book } from '../../models/book';

@Injectable()
export class CollectionEffects {
  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('books_app');
  });

  @Effect()
  loadCollection$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionActionTypes.Load),
    switchMap(() =>
      this.db
        .query('books')
        .pipe(
          toArray(),
          map((books: Book[]) => new LoadSuccess(books)),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  @Effect()
  addBookToCollection$: Observable<Action> = this.actions$.pipe(
    ofType<AddBook>(CollectionActionTypes.AddBook),
    map(action => action.payload),
    mergeMap(book =>
      this.db
        .insert('books', [book])
        .pipe(
          map(() => new AddBookSuccess(book)),
          catchError(() => of(new AddBookFail(book)))
        )
    )
  );

  @Effect()
  removeBookFromCollection$: Observable<Action> = this.actions$.pipe(
    ofType<RemoveBook>(CollectionActionTypes.RemoveBook),
    map(action => action.payload),
    mergeMap(book =>
      this.db
        .executeWrite('books', 'delete', [book.id])
        .pipe(
          map(() => new RemoveBookSuccess(book)),
          catchError(() => of(new RemoveBookFail(book)))
        )
    )
  );

  constructor(private actions$: Actions, private db: Database) {}
}
