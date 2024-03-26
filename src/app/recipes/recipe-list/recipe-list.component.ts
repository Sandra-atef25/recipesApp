import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipes.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipesServices } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent,CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  //@Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];
  constructor(private recipeService:RecipesServices,private router:Router,private route:ActivatedRoute){}
  ngOnInit(){
    this.recipes=this.recipeService.getRecipes();
  }
  // onRecipeSelect(recipeSelected:Recipe){
  //   this.recipeWasSelected.emit(recipeSelected);
  // }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }
}
