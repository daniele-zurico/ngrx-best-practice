import { Component, OnInit } from '@angular/core';
import { Authenticate } from '../models/user';
@Component({
  selector: 'bc-login-page',
  template: `
    <bc-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async">
    </bc-login-form>
  `,
  styles: [],
})
export class LoginPageComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  onSubmit($event: Authenticate) {
    debugger
  }
}
