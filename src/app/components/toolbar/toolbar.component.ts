import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { NissouService } from 'src/app/services/nissou.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  hideHomeButton: boolean = false;
  hideProductButton: boolean = false;
  hideLoginButton: boolean = false;
  hideRegisterButton: boolean = false;
  hideLogoutButton: boolean = true;
  hideAddPublicationButton: boolean = true;

  constructor(private router: Router, private nissouService: NissouService ) { }

  ngOnInit() {
    this.nissouService.isLoggedIn$.subscribe(isLoggedIn => {
      this.hideHomeButton = isLoggedIn;
      this.hideProductButton = isLoggedIn;
      this.hideLoginButton = !isLoggedIn;
      this.hideRegisterButton = !isLoggedIn;
      this.hideLogoutButton = isLoggedIn;
      this.hideAddPublicationButton = isLoggedIn;
    });
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }

  redirectToProducts() {
    this.router.navigate(['/products']);
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  getUserName(): string | null {
    return this.nissouService.getUserName();
  }

  isLoggedIn(): boolean {
    return !!this.nissouService.getUserName();
  }
}