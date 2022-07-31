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
  totalTodo : any;

  @Input()
  totalGroupe : any

  chartData : any

  constructor() { }

  ngOnInit() {
        this.GooglePieChart()
  }

  GooglePieChart(){
    this.chartData = {
      type: ChartType.PieChart,
      data:  [
        ["Total ToDo" , this.totalGroupe],
        ["Total ToDo terminée" , this.totalGroupe],
        ["Total ToDo non terminée" , this.totalGroupe],
      ],
      width: 1000,
      height: 400
      };   
  }
  
}
