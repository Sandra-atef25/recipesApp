import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DropdownDirective } from '../shared/dropdown.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [DropdownDirective, RouterLink, RouterLinkActive, CommonModule],
  standalone: true
})
export class HeaderComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  isAuthenticated: boolean = false;
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }
  ngOnInit(): void {
    this.sub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    })
  }
  saveData() {
    this.dataStorageService.storeRecipes();
  }
  fetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
  onLogOut() {
    this.authService.logOut()
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}




