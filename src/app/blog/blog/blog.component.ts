import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/types/Blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  @Input() blog: Blog = {} as Blog;
  @Input() blogIndex: number = 0;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {}
  getParam() {
    return `/posts/${this.blog._id}`;
  }

  // submit(id: string) {
  //   this.blogService.setParam(id);
  // }
}
