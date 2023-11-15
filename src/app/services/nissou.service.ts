import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NissouService {

  constructor(private http: HttpClient) { }

  postUser(user: any) {
    return this.http.post(environment.baseURL + '/users', user);
  }

  findUser(email: string, password: string) {
    return this.http.get(environment.baseURL + '/users/' + email + '/' + password);
  }

}
