import { Component, OnInit } from '@angular/core';
import { Authenticate } from '../models/user';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../store/reducers';
import * as AuthActions from '../store/actions/auth.actions';
@Component({
  selector: 'bc-login-page',
  template: `
    <bc-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async">
    </bc-login-form>
  `,
})
export class LoginPageComponent implements OnInit {
  pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
  error$ = this.store.pipe(select(fromAuth.getLoginPageError));
  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  onSubmit($event: Authenticate) {
    this.store.dispatch(new AuthActions.Login($event));
  }
}
