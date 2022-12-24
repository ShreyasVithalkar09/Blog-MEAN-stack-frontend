import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BlogService } from 'src/app/blog/blog.service';
import { Post } from 'src/app/types/Post';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
  blogImage: File = null;
  public Editor = ClassicEditor;

  // toolbar = [['heading', '|', 'bold', 'italic'], { autoParagraph: false }];

  ngOnInit(): void {
    // this.username = '';
  }

  form: Post = {
    title: '',
    description: '',
    category: '',
    author: this.authService.getUser().username,
    blogfile: this.blogImage!,
  };

  response: any = {};

  selected() {}
  isLoading() {
    return this.authService.isLoading;
  }

  onChange(event) {
    this.blogImage = event.target.files[0];
  }

  submit() {
    const formData = new FormData();
    formData.append('title', this.form.title);
    formData.append('description', this.form.description);
    formData.append('category', this.form.category);
    formData.append('author', this.authService.getUser().username);
    formData.append('blogfile', this.blogImage);
    this.authService.isLoading = true;

    this.blogService.addPost(formData).subscribe((data) => {
      this.response = data;
      if (this.response.success) {
        this.authService.isLoading = false;
        this.router.navigate(['dashboard']);
      }
    });
  }
}
