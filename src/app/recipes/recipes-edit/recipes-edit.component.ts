import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesServices } from '../recipes.service';
import { Ingredient } from '../../shared/ingrdient.model';
import { CommonModule } from '@angular/common';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-edit',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './recipes-edit.component.html',
  styleUrl: './recipes-edit.component.css'
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editmode: boolean = false;//we arenot on edit mode
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private recipeService: RecipesServices,
    private router:Router) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editmode = params['id'] != null;//this will not be undefined if we are in edit mode else on new mode
      console.log(this.editmode);
      this.initForm();
    })
  }
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if (this.editmode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name,Validators.required),
            'amount': new FormControl(ingredient.amount,
              [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
      
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipeImagePath,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients':recipeIngredients
    })
  }
  onSubmit() {
    const newRecipe=new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients'])
    if(this.editmode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value)
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
   }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  onAddIngredient(){
    //add new control to this form control
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,
          [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }
  onDeleteRecipe(i:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }

}
