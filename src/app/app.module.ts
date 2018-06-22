import { AppComponent } from './core/containers/app.component';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './reducers';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { DBModule } from '@ngrx/db';
import { schema } from './db';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true}),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    CoreModule.forRoot(),
    AuthModule.forRoot(),
    DBModule.provideDB(schema),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
