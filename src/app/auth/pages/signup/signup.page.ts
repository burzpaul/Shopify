import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '@app/store/app.state';
import * as AuthActions from '@auth/store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPageComponent {
  constructor(private store: Store<AppState>) {}
  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignUp({ userName: email, password }));
  }
}
