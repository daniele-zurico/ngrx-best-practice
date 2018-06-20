# NgrxLearning
This repo is a step by step guide from [ngrx-platform](https://github.com/ngrx/platform/tree/master/example-app)

In the master branch we setup the project folders, the routes and some pipes.

## Available routes
1. books
2. books/find
3. books/<book_id>

## How the code is organized:
There're 4 main folders under app:
1. core - is the starting point where app.component.ts is located
2. books - is the main root
3. shared - contains pipes
4. material - include all the material modules used in the entire application

core and books are organized in 2 sub-folder and 1 module:
1. containers - they're the views
2. components - components used by each view

CoreModule is imported in the `app.module.ts`, `books.modules.ts` instead is lazy loaded by `routes.ts`. Routes.ts finally is imported in the `app.module.ts` with the `RouterModule.forRoot`

### BooksModule.ts
![Alt text](./doc/BooksModule.png?raw=true)
Where:
1. CollectionPageComponent
2. FindBookPageComponent
3. ViewBookPageComponent
4. SelectedBookPageComponent
Are the `containers`

![booksStructure]("https://github.com/daniele-zurico/ngrx-best-practice/doc/BooksStructure.png")

##CoreModule.ts
![CoreModule]("https://github.com/daniele-zurico/ngrx-best-practice/doc/CoreModule.png")
Where:
1. AppComponent
Is the container and the others are `components` used by it:
![AppComponent]("https://github.com/daniele-zurico/ngrx-best-practice/doc/AppComponent.png")
