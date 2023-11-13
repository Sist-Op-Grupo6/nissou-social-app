import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide: boolean = true;
  email: any = ''
  password: any = ''

login() {
  const formData = {
    email: this.email,
    password: this.password,
  };

  localStorage.setItem('user', JSON.stringify(formData));
  console.log(localStorage.getItem('user'));

  this.email = '';
  this.password = '';
}
}
