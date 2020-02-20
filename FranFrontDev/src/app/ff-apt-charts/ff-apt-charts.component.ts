import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ff-apt-charts',
  templateUrl: './ff-apt-charts.component.html',
  styleUrls: ['./ff-apt-charts.component.css']
})
export class FfAptChartsComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = ['JavaScript', 'AngularJS', 'Angular', 'HTML5', 'CSS3', 'Others'];

  public barChartType = 'bar';

  public barChartLegend = true;
  public barChartData = [
    {
      data: [80, 80, 65, 43, 98],
      label: 'FrontEnd Skills'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
