import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagPostsService {

  constructor(private http: HttpClient) {}
  getTagPosts(tags:string,sortby:string,direction:string) {
    return this.http.get(`https://localhost:44377/api/tagposts/gettagposts?tags=${tags}&sortBy=${sortby}&direction=${direction}`);
  }
}
