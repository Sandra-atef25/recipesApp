import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { CommonModule } from '@angular/common';
import { RecipesServices } from '../recipes.service';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, DropdownDirective],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipesServices,
    private route: ActivatedRoute,private router:Router) {

  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id)
    })
  }
  onAddToshoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})
    // this.router.navigate(['edit'],{relativeTo:this.route})
  }

}
