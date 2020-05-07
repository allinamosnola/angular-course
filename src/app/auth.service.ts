import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  getToken(user, password) : Observable<any> {
    return this.http.post('https://tres-fakerapp.herokuapp.com/auth/login', { u: user, p: password })
  }

  getUserInfo(_token): Observable<any> {
    return this.http.get('https://tres-fakerapp.herokuapp.com/auth/user', {
        headers: {
          Authorization: _token,
        }
    })
  }
}
