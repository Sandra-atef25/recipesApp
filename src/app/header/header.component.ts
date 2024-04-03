import { Component, EventEmitter, Output } from '@angular/core';
import { DropdownDirective } from '../shared/dropdown.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports:[DropdownDirective,RouterLink,RouterLinkActive],
  standalone:true
})
export class HeaderComponent {
 constructor(private dataStorageService:DataStorageService){}
 saveData(){
  this.dataStorageService.storeRecipes();
 }
 fetchData(){
  this.dataStorageService.fetchRecipes().subscribe();
 }
}




