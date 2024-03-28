import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingrdient.model';
import { ShoppingListService } from '../shoppingList.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  //@ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
  //@ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;
  //@Output() ingredientAdded = new EventEmitter<{ name: string, amount: number }>()

  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editItem: Ingredient;
  constructor(private ingredientService: ShoppingListService) { }
  ngOnInit(): void {
    this.ingredientService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editItem = this.ingredientService.getIngredient(this.editedItemIndex);
      this.slForm.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      })
    });
  }
  ngOnDestroy(): void {
    this.ingredientService.startedEditing.unsubscribe();
  }
  onAddItem(form: NgForm) {
    //const ingName=this.nameInputRef.nativeElement.value;
    //const ingAmount=this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    //this.ingredientAdded.emit(newIngredient);
    console.log(form);
    if (this.editMode) {
      this.ingredientService.updateIngredient(newIngredient, this.editedItemIndex);
    }
    else {
      this.ingredientService.addIngredient(newIngredient);
    }
    this.slForm.reset();
    this.editMode = false;
  }

  onClearItem() {
    this.slForm.reset();

    this.editMode = false;
  }
  onDeleteItem() {
    this.ingredientService.deleteIngredient(this.editedItemIndex);
    
    this.onClearItem();
  }
}
