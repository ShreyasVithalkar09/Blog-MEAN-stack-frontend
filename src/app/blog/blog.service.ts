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
  // paramId: string = '';

  // httpOptions = {
  //   headers: new HttpHeaders().set(
  //     'Authorization',
  //     'Bearer ' + localStorage.getItem('token')
  //   ),
  // };
  getPosts() {
    return this.http.get(this.BASE_URL + '/');
  }

  addPost(formData: Post) {
    return this.http.post(this.BASE_URL + '/create', formData);
  }

  editPost(id: string, formData: Post) {
    return this.http.put(this.BASE_URL + `/${id}`, formData);
  }

  deletePost(id: string) {
    return this.http.delete(this.BASE_URL + `/${id}`);
  }

  getPostByCategory(category: string) {
    return this.http.get(this.BASE_URL + `?category=${category}`);
  }

  // setParam(id: string) {
  //   this.paramId = id;
  // }

  // getParam() {
  //   return this.paramId;
  // }

  getSingleBlog(id: string) {
    return this.http.get(this.BASE_URL + `/${id}`);
  }
}
