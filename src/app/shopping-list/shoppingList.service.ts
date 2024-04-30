import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingrdient.model";
import { Subject } from "rxjs";
@Injectable({providedIn:'root'})
export class ShoppingListService{
    ingredientsChanged=new Subject<Ingredient[]>();
    startedEditing=new Subject<number>();
    private ingredients:Ingredient[]=[
        new Ingredient("apples",7),
        new Ingredient("tomato",10)
    ];
    getIngredients(){
        return this.ingredients.slice();
    }  
    getIngredient(index:number){
        return this.ingredients[index];
    }
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(ingredient:Ingredient,index:number){
        this.ingredients[index]=ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        //or 
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}