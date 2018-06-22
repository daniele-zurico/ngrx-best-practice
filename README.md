Run the following commands to generate action/reducer and effects and update the `reducer/index` file with the generated store:
1. ``` ng g feature auth/Auth```
2. move everything inside a `store` folder
- `store/actions/auth.actions.ts`
- `store/effects/auth.effects.ts`
- `store/reducers/auth.reducer.ts`
- `store/reducers/index.ts` (add manually)

3. `ng g reducer auth/store/reducers/login-page`
4. implement `store/actions/auth.actions.ts`
5. implement `store/effects/auth.effects.ts`
6. implement `store/reducers/auth.reducer.ts`
7. implement `store/reducers/login-page.reducer.ts`
8. implement `store/reducers/index.ts`

9. import in the `auth.module.ts` the StoreModule and the EffectsModule
10. import in the `login-page.component.ts` the store part
11. import in the `auth-guard.service.ts` the store part
12. implement `auth-effects.ts`
