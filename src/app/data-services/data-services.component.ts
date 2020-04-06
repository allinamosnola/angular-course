import { Component, OnInit } from '@angular/core';
import { TradesService } from '../trades.service';
import { interval } from 'rxjs'

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

    sec.subscribe(n => 
      this.trades = this.tradesService.getTrades()  
    )
  }

}
