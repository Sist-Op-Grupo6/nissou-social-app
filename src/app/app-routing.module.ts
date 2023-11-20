import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddPublicationComponent } from './components/add-publication/add-publication.component';
import {CommentsComponent} from "./components/comments/comments.component";
import { EditPublicationComponent } from './components/edit-publication/edit-publication.component'; 

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-publication', component: AddPublicationComponent },
  { path: 'publication/comments', component: CommentsComponent },
  { path: 'edit-publication/:id', component: EditPublicationComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
