import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form.component';
import { LoginPageComponent } from './containers/login-page.component';
import { MaterialModule } from '../material';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


export const COMPONENTS = [
  LoginPageComponent,
  LoginFormComponent
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([{ path: 'login', component: LoginPageComponent }])
  ],
})
export class RootAuthModule {}
