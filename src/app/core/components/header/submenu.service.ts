import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class submenuService {
  //apiUrl = 'https://api.github.com/users';
  

  constructor(private http: HttpClient) {}

  getSubMenu() {
    return [
      {"name":"RPA Training"},
      {"name":"Automation Anywhere Training"},
      {"name":"Blue Prism Training"},
      {"name":"UiPath Training"},
      {"name":"RPA &#038; Cognitive for Strategic Management"},
      {"name":"Data Science Training"},
      {"name":"Blockchain"}
    ]
    // return this.http.get(`${this.apiUrl}?per_page=10`);
  }
  // getUser(username: string) {
  //   return this.http.get(`${this.apiUrl}/${username}`); 
  // }
 }
