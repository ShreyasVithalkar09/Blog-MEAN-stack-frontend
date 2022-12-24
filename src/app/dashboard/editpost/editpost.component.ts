import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BlogService } from 'src/app/blog/blog.service';
import { Blog } from 'src/app/types/Blog';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css'],
})
export class EditpostComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}

  selectedCategory: any;
  categoryData: any = ['technology', 'sports', 'programming', 'automobile'];

  blog: Blog = {} as Blog;
  response: any = {};
  id: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  form: Post = {
    title: this.blogService.post.title,
    description: this.blogService.post.description,
    category: this.blogService.post.category,
    author: this.authService.getUser().username,
    blogfile: this.blogService.post.blogfile,
  };

  submit() {
    const formData = new FormData();
    formData.append('title', this.form.title);
    formData.append('description', this.form.description);
    formData.append('category', this.form.category);
    formData.append('author', this.authService.getUser().username);

    this.blogService.editPost(this.id, formData).subscribe((data) => {
      this.response = data;
      if (this.response.success) {
        this.router.navigate(['dashboard']);
      }
    });
  }

  selected() {}

  isLoading() {
    return this.authService.isLoading;
  }
}
