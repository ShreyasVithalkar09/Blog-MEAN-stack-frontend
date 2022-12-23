import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  allBlogs: any[] = [];
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.blogService.getPosts().subscribe((res) => {
      // console.log(res);
      // console.log(typeof res);
      this.allBlogs = [...this.allBlogs, res];
      // console.log(this.allBlogs[0][0]);
    });
  }

  getSingleBlog() {}
}
