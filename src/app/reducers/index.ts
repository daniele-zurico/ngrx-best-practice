import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLayout from '../core/store/layout.reducer';

export interface State {

  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<State> = {

  layout: fromLayout.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


/**
 * Layout Reducers
 */
export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);
