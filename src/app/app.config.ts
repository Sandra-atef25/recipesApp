import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { ShoppingListService } from './shopping-list/shoppingList.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),ShoppingListService]
};
