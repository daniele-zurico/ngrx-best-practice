Run the following commands to generate action/reducer and effects and update the `reducer/index` file with the generated store:
1. ``` ng g feature core/Layout --reducers=../reducers/index.ts ```
After that I moved everything under the folder `store`
2. replace the content of the `layout.reducer.ts`:

```js
export enum LayoutActionTypes {
  OpenSidenav = '[Layout] Open Sidenav',
  CloseSidenav = '[Layout] Close Sidenav',
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CloseSidenav;
}

export type LayoutActionsUnion = OpenSidenav | CloseSidenav;
```

3. replace the content of `layout.reducer.ts`:

```js
export interface State {
  showSidenav: boolean;
}

export const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: LayoutActions): State {
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
```

3. we don't use the effects so feel free to remove it

4. `app.component.ts`:

```js
export class AppComponent {
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav$ = this.store.pipe(
      select(fromRoot.getShowSidenav)
    );
    this.loggedIn$ = this.store.pipe(
      select(fromAuth.getLoggedIn)
    );
  }

  closeSidenav() {
    this.store.dispatch(new LayoutActions.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new LayoutActions.OpenSidenav());
  }

  logout() {
    this.closeSidenav();
    // TODO when we have the store fro auth we can dispatch the action
  }
}
```
5. `app.component.ts`:
```html
  <bc-layout>
    <bc-sidenav [open]="showSidenav$ | async">
    ...
```

6. `reducers/index.ts

```js
/**
 * Layout Reducers
 */
export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);
```
