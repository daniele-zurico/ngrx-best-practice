import { AppComponent } from './containers/app.component';
import { CommonModule } from '@angular/common';
import { GoogleBooksService } from './services/google-book.service';
import { LayoutComponent } from './components/layout.component';
import { MaterialModule } from '../material';
import { NavItemComponent } from './components/nav-item.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav.component';
import { ToolbarComponent } from './components/toolbar.component';

export const COMPONENTS = [
  AppComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [GoogleBooksService],
    };
  }
}
