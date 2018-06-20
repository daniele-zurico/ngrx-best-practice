Run the following commands to install all the dependencies:
1. ``` yarn add @ngrx/{store,effects,entity,store-devtools} ```
2. ``` yarn add -D @ngrx/schematics ```
3. ``` ng config cli.defaultCollection @ngrx/schematics ```
4. ``` ng g store State --root --module=app.module.ts ```

In the `app.module.ts` add:
``` EffectsModule.forRoot([]), ```
