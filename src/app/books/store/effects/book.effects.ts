import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Scheduler, Observable, asyncScheduler, empty, of } from 'rxjs';
import { BookActionTypes, Search, SearchComplete, SearchError } from '../actions/book.actions';
import { Action } from '@ngrx/store';
import { switchMap, map, debounceTime, skip, takeUntil, catchError } from 'rxjs/operators';
import { Book } from '../../models/book';
import { GoogleBooksService } from '../../../core/services/google-book.service';


export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>(
  'Search Scheduler'
);

@Injectable()
export class BookEffects {

  @Effect()
  search$: Observable<Action> = this.actions$.pipe(
    ofType<Search>(BookActionTypes.Search),
    debounceTime(this.debounce || 300, this.scheduler || asyncScheduler),
    map(action => action.payload),
    switchMap(query => {
      if (query === '') {
        return empty();
      }

      const nextSearch$ = this.actions$.pipe(
        ofType(BookActionTypes.Search),
        skip(1)
      );

      return this.googleBooks
        .searchBooks(query)
        .pipe(
          takeUntil(nextSearch$),
          map((books: Book[]) => new SearchComplete(books)),
          catchError(err => of(new SearchError(err)))
        );
    })
  );

  constructor(
    private actions$: Actions,
    private googleBooks: GoogleBooksService,
    @Optional()
    @Inject(SEARCH_DEBOUNCE)
    private debounce: number,
    @Optional()
    @Inject(SEARCH_SCHEDULER)
    private scheduler: Scheduler
  ) {}
}
