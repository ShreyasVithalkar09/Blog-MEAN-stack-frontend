import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm, RegisterForm } from '../types/Auth';
import { User } from '../types/User';
import { Router } from '@angular/router';
import { skip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  BASE_URL = 'http://localhost:4000/users';
  isLoading: boolean = false;
  isLoggedIn: boolean = false;
  user: any = {};
  token: string;
  response: any = {};
  err: string;

  register(formData: RegisterForm) {
    this.isLoading = true;
    return this.http.post(this.BASE_URL + '/register', formData, {
      headers: { skip: 'true' },
    });
  }

  login(formData: LoginForm) {
    this.isLoading = true;
    this.http.post(this.BASE_URL + '/login', formData).subscribe((data) => {
      this.isLoading = false;
      this.response = data;
      if (this.response.success) {
        this.isLoggedIn = true;
        const token = this.response.token;
        this.token = token;

        // set user
        this.user.email = this.response.user.email;
        this.user.username = this.response.user.username;

        // navigate to home
        this.router.navigate(['/']);
      } else {
        this.err = this.response.err;
      }
    });
  }

  logout() {
    return this.http.get(this.BASE_URL + '/logout');
  }

  getToken() {
    if (this.token !== '') {
      return this.token;
    }
    return null;
  }

  getUser() {
    return this.user;
  }

  getErrorMsg() {
    return this.err;
  }
}
