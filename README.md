## AuthModule.ts
We added the authentication module to restrict the access in case you not logged in. The folder structure is still the same:
1. containers
2. components
3. **models** - the interface to Authenticate and the User
4. **services** - it contains the auth-guard (to allow to see or not the books) and the service to login
![Alt text](./doc/AuthModule.png?raw=true)

The relation between containers and component is the following:
![Alt text](./doc/Login.png?raw=true)

The `routes.ts` has been updated:

```js
{
  path: 'books',
  loadChildren: './books/books.module#BooksModule',
  canActivate: [AuthGuard],
}
```
