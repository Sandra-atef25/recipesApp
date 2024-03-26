import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Ingredient } from '../shared/ingrdient.model';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from './shoppingList.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[];
  //a7out el subject fe property then a clean it up ba3d ma a5las
  private igChangedSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangedSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => { this.ingredients = ingredients; });
  }
   ngOnDestroy(): void {
     this.igChangedSub.unsubscribe();
   }
}
