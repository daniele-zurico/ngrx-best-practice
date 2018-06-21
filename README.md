Run the following commands to generate action/reducer and effects and update the `reducer/index` file with the generated store:
1. ``` ng g feature core/Layout --reducers=../reducers/index.ts ```
After that I moved everything under the folder `store` and each file in his own folder:

- store/actions/layout.actions.ts
- store/reducers/layout.reducer.ts
- I create store/reducers/index.ts
- we don't use the effects so feel free to remove it

2. replace the content of the `store/actions/layout.actions.ts`:

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

3. replace the content of `store/reducers/layout.reducer.ts`:

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

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);

```

5. `store/reducers/index.ts`
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

6. `app.component.ts`:

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

7. `app.component.html`:
```html
  <bc-layout>
    <bc-sidenav [open]="showSidenav$ | async">
    ...
```

### Note
From the official documentation there're some small changes:
- I put everything under the store folder
- I created under the reducer folder an index file for the createFeatureSelector. In the official doc the content of that file is under reducer/index.ts (not sure why)

