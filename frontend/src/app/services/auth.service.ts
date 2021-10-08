import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://localhost:3000/api/v1/users/register';
  private loginUrl = 'http://localhost:3000/api/v1/users/login';


  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: any){
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user: any) {
    return this.http.post<any>(this.loginUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
    this.router.navigate(['/home']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getName(){
    return localStorage.getItem('name');
  }

  getEmail(){
    return localStorage.getItem('email');
  }

  getPhone(){
    return localStorage.getItem('phone');
  }

  getID(){
    return localStorage.getItem('id');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

}
