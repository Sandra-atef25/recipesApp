import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipesServices } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipes.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipesSe: RecipesServices) { }
    storeRecipes() {
        const recipes = this.recipesSe.getRecipes();
    this.http
      .put(
        'https://recipebook-2026f-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
    }
    fetchRecipes() {
        //take tells that i have to take only 1 value of user then it will unsubscribe
        //to pipe 2 observale la2n return gowa subscribe mesh naf3 fa ba3meil pipe esmo exhaustmap
        //exhaust map beystana el awel ye5ls el subscribtion then el observale el tani ya5od makano
      
        return this.http
        .get<Recipe[]>(
          'https://recipebook-2026f-default-rtdb.firebaseio.com/recipes.json'
        )
        .pipe(
          map(recipes => {
            return recipes.map(recipe => {
              return {
                ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients : []
              };
            });
          }),
          tap(recipes => {
            this.recipesSe.setRecipes(recipes);
          })
        );
      
    }
}
