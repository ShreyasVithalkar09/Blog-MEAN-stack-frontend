import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BlogService } from 'src/app/blog/blog.service';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
})
export class AddpostComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private blogService: BlogService,
    private router: Router
  ) {}
  selectedCategory: any;
  categoryData: any = ['technology', 'sports', 'programming', 'automobile'];

  ngOnInit(): void {
    // this.username = '';
  }

  form: Post = {
    title: '',
    description: '',
    category: '',
    author: this.authService.getUser().username,
  };

  response: any = {};

  selected() {
    console.log(this.form);
  }
  isLoading() {
    return this.authService.isLoading;
  }

  submit() {
    this.blogService.addPost(this.form).subscribe((data) => {
      console.log(data);
      this.response = data;
      if (this.response.success) {
        this.router.navigate(['dashboard']);
      }
    });
  }
}
