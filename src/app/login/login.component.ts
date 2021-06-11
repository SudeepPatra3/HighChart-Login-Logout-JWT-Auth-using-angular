import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  accessToken: string;
  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {}

  onLogin(form) {
    this.http.post<any>('http://localhost:3000/login', form).subscribe(
      (res) => {
        localStorage.setItem('token', res.accessToken);
        this.router.navigate(['/specials']);
      },
      (err) => console.log(err)
    );
  }
}
