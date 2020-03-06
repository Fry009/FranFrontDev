import { Component, OnInit } from '@angular/core';
import { Market } from '../market';
import { MarketService } from '../market.service';

@Component({
  selector: 'app-ff-market-component',
  templateUrl: './ff-market-component.component.html',
  styleUrls: ['./ff-market-component.component.css']
})
export class FfMarketComponentComponent implements OnInit {

  marketList: Market[];
  district: string; //sample value

  constructor(private marketService: MarketService) { }

  ngOnInit(): void {

    this.district = 'CHAMARTIN';
    console.log(this.district);
    this.getMarkets(this.district);
  }

  getMarkets(district: string): void {
    let a = 2;
    this.marketService.getMarkets(district)
      .subscribe(marketList => this.marketList = marketList);
    console.log(this.marketList);
  }

}
