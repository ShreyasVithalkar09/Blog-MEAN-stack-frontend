import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../types/Post';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  BASE_URL = 'http://localhost:4000/posts';

  post: Post = {} as Post;

  getPosts() {
    return this.http.get(this.BASE_URL + '/');
  }

  addPost(formData: FormData) {
    return this.http.post(this.BASE_URL + '/create', formData);
  }

  editPost(id: string, formData: FormData) {
    return this.http.put(this.BASE_URL + `/${id}`, formData);
  }

  deletePost(id: string) {
    return this.http.delete(this.BASE_URL + `/${id}`);
  }

  getPostByCategory(category: string) {
    return this.http.get(this.BASE_URL + `?category=${category}`);
  }

  getSingleBlog(id: string) {
    return this.http.get(this.BASE_URL + `/${id}`);
  }
}
