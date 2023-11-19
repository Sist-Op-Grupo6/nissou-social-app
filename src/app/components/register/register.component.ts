import { Component, OnInit, ViewChild } from '@angular/core';
import { user } from 'src/app/models/user';
import { NissouService } from 'src/app/services/nissou.service';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private nissouService: NissouService, private router: Router) { }

  ngOnInit(){
  }
  
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
      id : '',
      first_name: this.user.firstName,
      last_name: this.user.lastName,
      email: this.user.email,
      password: this.user.password,
      age: this.user.age,
      gender: this.user.gender
    };
  
    // Utiliza formData en lugar de this.user al enviar los datos al servicio
    this.nissouService.postUser(formData).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    );

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