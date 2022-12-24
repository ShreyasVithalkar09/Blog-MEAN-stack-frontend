import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterForm } from 'src/app/types/Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: RegisterForm = {
    username: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    this.authService.register(this.form).subscribe((data) => {
      this.authService.isLoading = false;
      this.form = {
        username: '',
        email: '',
        password: '',
      };
      this.router.navigate(['login']);
    });
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
