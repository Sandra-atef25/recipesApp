import { Component, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipesServices } from './recipes/recipes.service';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingListService } from './shopping-list/shoppingList.service';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RecipesComponent,
    RecipesEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule,
    DropdownDirective,
    RecipeStartComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[RecipesServices,DataStorageService]
})

export class AppComponent {
  // title = 'recipesApp';
  // loadedFeature = 'recipe';
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
