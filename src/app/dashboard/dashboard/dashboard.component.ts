import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BlogService } from 'src/app/blog/blog.service';
import { Post } from 'src/app/types/Post';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.username = '';
    this.getUser();
    this.getUserPosts();
  }

  posts: any[] = [];
  postsLength: number = 0;

  username: string = '';
  response: any = {};

  getUser() {
    this.username = this.authService.getUser().username;
  }

  getParam(id: string) {
    return `/dashboard/editpost/${id}`;
  }
  getUserPosts() {
    if (this.username !== '') {
      this.dashboardService.getUserPosts(this.username).subscribe((data) => {
        this.posts = [...this.posts, data];
        this.postsLength = this.posts[0].length;
      });
    }
  }

  editPost(post: Post) {
    this.blogService.post = post;
    // localStorage.setItem('id', id);
  }

  submit(post: Post, id: string) {
    this.blogService.deletePost(id).subscribe((data) => {
      this.response = data;
      if (this.response.success) {
        alert('Post Successfully deleted');
        this.posts[0].splice(this.posts[0].indexOf(post), 1);
      }
    });
  }
}
