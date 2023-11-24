import { Component, OnInit, ViewChild } from '@angular/core';
import { NissouService } from 'src/app/services/nissou.service';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private nissouService: NissouService, private router: Router) { }

  ngOnInit(){
  }

  hide: boolean = true;
  email: any = ''
  password: any = ''

login() {
  const formData = {
    email: this.email,
    password: this.password,
  };

  // Utiliza formData en lugar de this.user al enviar los datos al servicio
  this.nissouService.findUser(this.email, this.password).subscribe(
    (res) => {
      console.log(res);
      //obtain the user entity and save in local storage
      localStorage.setItem('user', JSON.stringify(res));
      //set logged in state to true
      this.nissouService.setLoggedInState(true);
      alert('User logged in successfully');
      //redirect to home
      this.router.navigate(['/home']);
    },
    (err) => {
      alert('User not found');
      console.log(err);
    }
  );

  this.email = '';
  this.password = '';
}
}
