import { Component, OnInit } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { Recipe } from './recipes.model';
import { CommonModule } from '@angular/common';
import { RecipesServices } from './recipes.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeDetailComponent,RecipeListComponent,CommonModule,RouterOutlet],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
 // providers:[RecipesServices]
})

export class RecipesComponent implements OnInit{
  // selectedRecipe:Recipe;
  // constructor(private recipeSelected:RecipesServices){}
  ngOnInit(){
    // this.recipeSelected.recipeSelected.subscribe((recipe:Recipe)=>{
    //   this.selectedRecipe=recipe;
    // })
  }
}
