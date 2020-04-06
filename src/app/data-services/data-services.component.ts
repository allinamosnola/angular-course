import { Component, OnInit } from '@angular/core';
import { TradesService } from '../trades.service';

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
    this.trades = this.tradesService.getTrades()
  }

}
