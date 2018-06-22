import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Book } from '../../models/book';
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  toArray
  } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

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


@Injectable()
export class CollectionEffects {
  @Effect()
  loadCollection$: Observable<Action> = this.actions$
  .pipe(
    ofType(CollectionActionTypes.Load),
    toArray(),
    map((books: Book[]) => new LoadSuccess(books)),
    catchError(error => of(new LoadFail(error)))
  );

  @Effect()
  addBookToCollection$: Observable<Action> = this.actions$
  .pipe(
    ofType<AddBook>(CollectionActionTypes.AddBook),
    map(action => action.payload),
    map((book) => new AddBookSuccess(book)),
    catchError((book) => of(new AddBookFail(book)))
  );

  @Effect()
  removeBookFromCollection$: Observable<Action> = this.actions$
  .pipe(
    ofType<RemoveBook>(CollectionActionTypes.RemoveBook),
    map(action => action.payload),
    map((book) => new RemoveBookSuccess(book)),
    catchError((book) => of(new RemoveBookFail(book)))
  );

  constructor(private actions$: Actions) {}
}
