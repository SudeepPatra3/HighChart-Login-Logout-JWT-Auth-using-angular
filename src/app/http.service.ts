import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseurl = 'http://localhost:3000/data';
  baseurl2 = 'http://localhost:3000/pie';
  baseurl3 = 'http://localhost:3000/login';

  constructor(private http: HttpClient, private router: Router) {}

  getPosts() {
    return this.http.get<any>(this.baseurl);
  }
  getpie() {
    return this.http.get<any>(this.baseurl2);
  }
  reguserhttp(user) {
    return this.http.post<any>(this.baseurl3, user);
  }
  loggedin() {
    return !!localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
