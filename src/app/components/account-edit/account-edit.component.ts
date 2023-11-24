import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { NissouService } from 'src/app/services/nissou.service';  
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

  constructor(private nissouService: NissouService, private router: Router, private _snackBar: MatSnackBar) { }
  
  hide: boolean = true;
  user: user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: '',
    gender: ''  
  };

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      
      this.user = {
        id: parsedUser.id,
        firstName: parsedUser.first_name,
        lastName: parsedUser.last_name,
        email: parsedUser.email,
        password: parsedUser.password,
        age: parsedUser.age,
        gender: parsedUser.gender
      };

      console.log(storedUser);
      console.log(this.user);

      this.user.password = '';
    }
  }

  updateAccount() {
    const formData = {
      id: this.user.id,
      first_name: this.user.firstName,
      last_name: this.user.lastName,
      age: this.user.age,
      gender: this.user.gender,
      email: this.user.email,
      password: this.user.password,
    };

    if(this.user.password != JSON.parse(localStorage.getItem('user') || '{}').password){
      this._snackBar.open('Invalid Password', 'Cerrar', {
        duration: 2000,
      });
      return;
    }

    this.nissouService.updateUser(formData).subscribe(
      (res) => {
        console.log(res);
      localStorage.setItem('user', JSON.stringify(res));
      this.nissouService.setLoggedInState(true);
      this._snackBar.open('user updated successfully', 'Cerrar', {
        duration: 2000,
      });
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
        this._snackBar.open('Error updating user. Please try again', 'Cerrar', {
          duration: 2000,
        });
      }
    );
  }
}
