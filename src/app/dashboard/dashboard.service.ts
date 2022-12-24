import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  BASE_URL = 'http://localhost:4000/posts';

  getUserPosts(username: string) {
    return this.http.get(this.BASE_URL + `/userposts?author=${username}`);
  }
}
