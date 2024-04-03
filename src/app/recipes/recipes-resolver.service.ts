import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Observable } from "rxjs";
import { RecipesServices } from "./recipes.service";
@Injectable({
    providedIn:'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor(private dataService:DataStorageService,private recipesService:RecipesServices){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes=this.recipesService.getRecipes();
        if(recipes.length===0){
            return this.dataService.fetchRecipes();
        }
        return recipes;
    }
}