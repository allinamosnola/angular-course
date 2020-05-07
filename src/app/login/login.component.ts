import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { map } from 'rxjs-compat/operator/map';
import { Observable } from 'rxjs';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authResp = {code: 401}
  userResp = {}
  error = {code: 401, msg: ''}
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  validateUser(user: String, password: String){
    const validation = this.auth.getToken(user, password)

    validation.subscribe(
      data => {
        console.log('data: ', data)
        this.authResp = data
        console.log('authResp: ', this.authResp)
        if (data.token) {
          localStorage.setItem('token', data.token);
          this.getUserData(data.token)
          this.router.navigate(['/']);
        }
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          console.log("err: ", err)
          if (err.status === 401) {
              this.error = err.error;
          }
        }
      }
    )
  }

  getUserData(token) {
    this.auth.getUserInfo(token).subscribe(
      data => {
        this.userResp = data
      }
    )
  }

}
