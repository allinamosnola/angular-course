import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';

{
  providedIn: 'root'
}

@Injectable()
export class TradesService{
  constructor(
    private http: HttpClient
  ) { }
  items = [];
  trades = {};

  getTrades(): Observable<any> {

    return this.http.get('https://api.bitso.com/v3/trades/', { params: { book: "btc_mxn", limit: "10" }})
      // .map(
      //   (data) => {
      //     console.log('data: ', data)
      //     return data;
      //   })
    
  }

}