import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingrdient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipesServices{
    //to inform the component that a recipe was selected 
    
    //recipeSelected=new Subject<Recipe>();
    private recipes:Recipe[]=[
        new Recipe("Recipe1","this a test","https://bing.com/th?id=OSK.90f427f416d4fbc45bb26bca7c908784",[new Ingredient('meat',1),new Ingredient('frensh',20)])
    ];
    constructor(private slService:ShoppingListService){

    }
    getRecipes(){
        //return the refrence of this array
        //slice return new array to get a copy
        return this.recipes.slice();
    } 
    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
    getRecipe(id:number){
        return this.recipes.slice()[id];
    }
}
