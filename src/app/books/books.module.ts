import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollectionPageComponent } from './containers/collection-page.component';
import { MaterialModule } from '../material';
import { ComponentsModule } from './components';
import { FindBookPageComponent } from './containers/find-book-page.component';
import { ViewBookPageComponent } from './containers/view-book-page.component';
import { SelectedBookPageComponent } from './containers/selected-book-page.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: 'find', component: FindBookPageComponent },
      {
        path: ':id',
        component: ViewBookPageComponent,
        canActivate: [],
      },
      { path: '', component: CollectionPageComponent },
    ])
  ],
  declarations: [
    CollectionPageComponent,
    FindBookPageComponent,
    ViewBookPageComponent,
    SelectedBookPageComponent
  ]
})
export class BooksModule { }
