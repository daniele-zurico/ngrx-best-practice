# NgrxLearning
This repo is a step by step guide from [ngrx-platform](https://github.com/ngrx/platform/tree/master/example-app)
It's organized by branch and each branch add a new layer:
1. **master** branch contains the project folders, the routes and some pipes;
2. **auth** branch setup the authentication and the guards;
3. **ngrx** we setup ngrx (dependencies and base modules)
4. **ngrx-core** we setup ngrx for the core module
5. **ngrx-books** we setup ngrx for the books module
6. **ngrx-auth** we setup ngrx for the auth module
7. **ngrx-db** `provideDB` sets up @ngrx/db with the provided schema and makes the Database service available

Live demo: https://stackblitz.com/github/daniele-zurico/ngrx-best-practice/tree/ngrx-db

## Available routes
1. books
2. books/find
3. books/<book_id>

## How the code is organized:
There're 4 main folders under app:
1. **core** - is the starting point where app.component.ts is located
2. **books** - is the main root
3. **shared** - contains pipes
4. **material** - include all the material modules used in the entire application

**core** and **books** are organized in at least 2 sub-folder and 1 module:
1. **containers** - they're the views
2. **components** - components used by each view

**core** contains as well:
1. **services** - `retrieveBook` and `searchBooks` from googleApi

**books** contain as well:
1. models - it defines the interface for the book that reflect the googleApi result

CoreModule is imported in the `app.module.ts`, `books.modules.ts` instead is lazy loaded by `routes.ts`. Routes.ts finally is imported in the `app.module.ts` with the `RouterModule.forRoot`

### BooksModule.ts
![Alt text](./doc/BooksModule.png?raw=true)
Where:
1. CollectionPageComponent
2. FindBookPageComponent
3. ViewBookPageComponent
4. SelectedBookPageComponent

Are the `containers`
![Alt text](./doc/BooksStructure.png?raw=true)

## CoreModule.ts
![Alt text](./doc/CoreModule.png?raw=true)
Where **AppComponent** is the container and the others are `components` used by it:
![Alt text](./doc/AppComponent.png?raw=true)
