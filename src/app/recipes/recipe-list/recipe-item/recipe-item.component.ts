import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipesServices } from '../../recipes.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  //@Input allows us to bind a component from outside
  @Input() recipe:Recipe;
  @Input() index:number
  constructor(){}
  //@Output to listen to our event from outside
  //@Output() recipeSelected=new EventEmitter<void>();
  // onSelected()
  // {
  //   //trigger recipe selected
  //   //this.recipeSelected.emit();

  //   //transform this that is selected
  //   this.recipeSelectedService.recipeSelected.emit(this.recipe)
  // }
}
