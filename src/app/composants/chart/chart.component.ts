import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  
  @Input()
  totalEnded : any;

  @Input()
  totalNotEnded : any

  chartData : any

  constructor() { }

  ngOnInit() {
        this.GooglePieChart()
  }

  GooglePieChart(){
    this.chartData = {
      type: ChartType.PieChart,
      data:  [
        ["Total ToDo terminée" , this.totalEnded],
        ["Total ToDo non terminée" , this.totalNotEnded],
      ],
      width: 1000,
      height: 400
      };   
  }
  
}
