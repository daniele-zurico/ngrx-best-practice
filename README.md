This is the most complicate branhc so far! take more time to fully understand Entity and how everything is composed.
Run the following commands to generate action/reducer and effects and update the `reducer/index` file with the generated store:
1. ``` ng g feature books/Book```
2. ``` ng g feature books/Collection ```
After that I moved everything under the folder `store` and each file in his own folder:

- store/actions/collection.actions.ts
- store/actions/book.actions.ts
- store/actions/index.ts

- store/reducers/collection.reducer.ts
- store/reducers/book.reducer.ts
- store/reducers/index.ts

- store/effects/collection.effects.ts
- store/effects/book.effects.ts
- store/effects/index.ts

3. replace the content of `store/actions/collection.actions.ts`;
4. replace the content of `store/reducers/collection.reducers.ts`;

5. replace the content of `store/actions/book.actions.ts`;
6. replace the content of `store/reducers/book.reducers.ts` - **note**  for the BookReducer it has been used the Entity package that perform CRUD operations and manage list in an optimized way
7. create a new reducer `store/reducers/search.reducer.ts`
8. implement the `store/actions/index.ts`

9. replace store/effects/book.effects.ts (search functionality)
10.replace store/effects/collection.effects.ts

11. Import in the `books.module.ts`:
```js
StoreModule.forFeature('books', reducers),
EffectsModule.forFeature([BookEffects, CollectionEffects]),
```

12. implement `find-book-page.component.ts`
13. implement `view-book-page.component`
14. implement `collection-page.component.ts`
15. implement `selected-book-page.component.ts`
