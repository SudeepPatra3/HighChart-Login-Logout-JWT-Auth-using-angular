import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {}

  onSubmit(form) {
    this.http.post<any>('http://localhost:3000/register', form).subscribe(
      (res) => {
        localStorage.setItem('token', res.accessToken);
        this.router.navigate(['/specials']);
      },
      (err) => console.log(err)
    );
  }
}
