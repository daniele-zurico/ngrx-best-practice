import { Action } from '@ngrx/store';
import { LayoutActionsUnion, LayoutActionTypes } from './layout.actions';

export interface State {
  showSidenav: boolean;
}

export const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: LayoutActionsUnion): State {
  switch (action.type) {
    case LayoutActionTypes.CloseSidenav:
      return {
        showSidenav: false,
      };

    case LayoutActionTypes.OpenSidenav:
      return {
        showSidenav: true,
      };

    default:
      return state;
  }
}
export const getShowSidenav = (state: State) => state.showSidenav;

