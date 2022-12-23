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
    console.log('This is post id ----- ' + this.id);
    // this.route.data.subscribe((res) => {
    //   this.postId = res;
    //   console.log(this.postId.id);
    //   localStorage.removeItem('id');
    //   // if (this.postId.id) {
    //   //   this.getSingleBlog();
    //   // }
    // });
  }

  form: Post = {
    title: this.blogService.post.title,
    description: this.blogService.post.description,
    category: this.blogService.post.category,
    author: this.authService.getUser().username,
  };

  submit() {
    console.log(this.form, this.id);
    this.blogService.editPost(this.id, this.form).subscribe((data) => {
      console.log(data);
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

  // async setForm() {
  //   await this.blogService.getSingleBlog(this.postId.id).subscribe((data) => {
  //     this.blog = data as Blog;
  //     // console.log(this.blog);
  //   });
  //   if (
  //     (this.form.title &&
  //       this.form.description &&
  //       this.form.category &&
  //       this.form.author) == ''
  //   ) {
  //     this.form = {
  //       title: this.blog.title!,
  //       description: this.blog.description!,
  //       category: this.blog.category!,
  //       author: this.authService.getUser().username,
  //       // author: this.authService.getUser().username,
  //     };
  //   }
  // }
}
