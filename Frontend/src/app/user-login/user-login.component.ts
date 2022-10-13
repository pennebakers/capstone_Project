import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  model: any = {};
  sessionId: any = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  login() {
    let url = '/fundingforce/registration';
    this.http
      .post<any>(url, {
        username: this.model.userName,
        password: this.model.password,
      })
      .subscribe((res) => {
        if (res) {
          this.sessionId = res.sessionId;

          sessionStorage.setItem('token', this.sessionId);
          this.router.navigate(['fundingforce/home']);
          console.log('Working');
        } else {
          alert('Authentication failed.');
        }
      });
  }
}
