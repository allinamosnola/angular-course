import { Component, OnInit } from '@angular/core';
import { TradesService } from '../trades.service';
import { interval } from 'rxjs'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-data-services',
  templateUrl: './data-services.component.html',
  styleUrls: ['./data-services.component.css']
})
export class DataServicesComponent implements OnInit {

  trades;
  constructor(
    private tradesService: TradesService
  ) { }

  ngOnInit() {
    const sec = interval(30000)
    this.getTradeService()
    sec.subscribe(n => 
      this.getTradeService() 
    )
  }

  getTradeService() {
    this.trades = []
    this.tradesService.getTrades().subscribe(
      data => {
        for (let key in data) {
          if (key == 'payload') {
            data[key].map(e => {
              this.trades.push(e)
            })
          }
        }
      }
    )
  }

}
