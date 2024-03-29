import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: LoginForm = {
    email: '',
    password: '',
  };

  response: any = {};
  errmsg: string = '';
  constructor(private authService: AuthService) {}

  submit() {
    this.authService.login(this.form);
    this.errmsg = this.authService.getErrorMsg();
  }

  isLoading() {
    return this.authService.isLoading;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  isSuccess() {
    return this.response.success;
  }

  ngOnInit(): void {}
}
