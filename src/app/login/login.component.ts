import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authResp = {}
  userResp = {}
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  validateUser(user, password) {
    this.authResp = {}
    this.auth.getToken(user, password).subscribe(
      data => {
        this.authResp = data
        if (data.token) {
          this.getUserData(data.token)
        }
      }
    )

  }

  getUserData(token) {
    this.auth.getUserInfo(token).subscribe(
      data => {
        this.userResp = data
        console.log("userData", data)
      }
    )
  }

}
