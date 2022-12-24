import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'expressmongo-blog';

  constructor(private authService: AuthService, private router: Router) {}
  res: any = {};

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  submit() {
    this.authService.logout().subscribe((data) => {
      this.res = data;
      if (this.res.success) {
        localStorage.removeItem('token');
        this.authService.isLoggedIn = false;
        this.authService.getUser().username = '';
        this.router.navigate(['/']);
      }
    });
  }
}
