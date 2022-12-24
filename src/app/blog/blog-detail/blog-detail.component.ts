import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/types/Blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}
  blog: Blog = {} as Blog;
  id: string = '';
  imageUrl: string = '';
  content: string = '';
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getSingleBlog();
  }

  getSingleBlog() {
    this.blogService.getSingleBlog(this.id).subscribe((data) => {
      this.blog = data as Blog;
      const content = this.blog.description.replace('/\n/g', '<br/>');
      this.content = content;
      const imgUrl = this.blog.blogImage.secure_url!;
      this.imageUrl = imgUrl;
    });
  }
}
