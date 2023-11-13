import { Component } from '@angular/core';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide: boolean = true;
  user: user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: '',
    gender: ''  
  };

  register() {
    const formData = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      password: this.user.password,
      age: this.user.age,
      gender: this.user.gender
    };

    localStorage.setItem('user', JSON.stringify(formData));
    console.log(localStorage.getItem('user'));

    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      age: '',
      gender: ''
    };
  }
}