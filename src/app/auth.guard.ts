import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private http: HttpService, private router: Router) {}

  canActivate(): boolean {
    if (this.http.loggedin()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
