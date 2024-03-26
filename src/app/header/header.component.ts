import { Component, EventEmitter, Output } from '@angular/core';
import { DropdownDirective } from '../shared/dropdown.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports:[DropdownDirective,RouterLink,RouterLinkActive],
  standalone:true
})
export class HeaderComponent {

}



