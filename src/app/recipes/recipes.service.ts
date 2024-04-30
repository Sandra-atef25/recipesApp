import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingrdient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';

@Injectable({providedIn:'root'})
export class RecipesServices {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //     [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
  //   ),
  //   new Recipe(
  //     'Big Fat Burger',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
  //   )
  // ];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

// import { EventEmitter, Injectable } from "@angular/core";
// import { Recipe } from "./recipes.model";
// import { Ingredient } from "../shared/ingrdient.model";
// import { ShoppingListService } from "../shopping-list/shoppingList.service";
// import { Subject } from "rxjs/Subject";
// @Injectable()
// export class RecipesServices {
//     //to inform the component that a recipe was selected 
//     recipesChanged = new Subject<Recipe[]>();
//     //recipeSelected=new Subject<Recipe>();
//     // private recipes: Recipe[] = [
//     //     new Recipe("Recipe1", "this a test", "https://bing.com/th?id=OSK.90f427f416d4fbc45bb26bca7c908784", [new Ingredient('meat', 1), new Ingredient('frensh', 20)]),
//     //     new Recipe('Big Fat Burger',
//     //         'What else you need to say?',
//     //         'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
//     //         [
//     //             new Ingredient('Buns', 2),
//     //             new Ingredient('Meat', 1)
//     //         ])
//     // ];
//     private recipes: Recipe[] = [];
//     constructor(private slService: ShoppingListService) {

//     }
//     getRecipes() {
//         //return the refrence of this array
//         //slice return new array to get a copy
//         return this.recipes.slice();
//     }
//     addIngredientsToShoppingList(ingredients: Ingredient[]) {
//         this.slService.addIngredients(ingredients);
//     }
//     getRecipe(id: number) {
//         return this.recipes[id];
//     }
//     addRecipe(recipe: Recipe) {
//         this.recipes.push(recipe);
//         this.recipesChanged.next(this.recipes.slice());
//     }
//     updateRecipe(index: number, newRecipe: Recipe) {
//         this.recipes[index] = newRecipe;
//         this.recipesChanged.next(this.recipes.slice());
//     }
//     deleteRecipe(index: number) {
//         this.recipes.splice(index, 1);
//         this.recipesChanged.next(this.recipes.slice());
//     }
//     setRecipes(recipes: Recipe[]) {
//         this.recipes = recipes;
//         this.recipesChanged.next(this.recipes.slice());
//     }
// }
