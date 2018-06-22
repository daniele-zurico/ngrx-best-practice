import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import * as AuthActions from '../store/actions/auth.actions';
import * as fromAuth from '../store/reducers';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromAuth.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getLoggedIn),
      map(authed => {
        if (!authed) {
          this.store.dispatch(new AuthActions.LoginRedirect());
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
