import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipesServices } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipes.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipesSe: RecipesServices) { }
    storeRecipes() {
        const recipesData = this.recipesSe.getRecipes();
        //put bey provide en ne override kol el data 3ala 7asab el body
        return this.http
            .put(
                'https://recipebook-2026f-default-rtdb.firebaseio.com/recipes.json',
                recipesData
            )
            .subscribe((recipes) => {
                console.log(recipes);
            });
    }
    fetchRecipes() {
        return this.http.get<Recipe[]>('https://recipebook-2026f-default-rtdb.firebaseio.com/recipes.json')
        .pipe(map(recipes=>{
            return recipes.map(recipe=>{
                return {...recipe,ingredients:recipe.ingredients?recipe.ingredients:[]};
            })
        }),tap(recipes=>{
            this.recipesSe.setRevipes(recipes);
         
        }))
      
    }
}
