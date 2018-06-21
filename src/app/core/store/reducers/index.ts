import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLayout from './layout.reducer';
/**
 * Layout Reducers
 */
export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);
