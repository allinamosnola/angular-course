import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

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

  async getTrades() {

    return this.trades = await this.http.get('https://api.bitso.com/v3/trades/', { params: { book: "btc_mxn" }})
      .map(
        (data) => {
          let items = data.payload ? data.payload : null
          console.log('data: ', items)
          return items;
        }).toPromise()
    
  }

}