import { Component, OnInit } from '@angular/core';
import { StatistiqueService } from 'src/app/services/statistique/statistique.service';
import { ChartType } from 'angular-google-charts';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(
    private statistiqueService : StatistiqueService
  ) { }

  totalTodo : number = 0
  totalGroupe : number = 0
    

  ngOnInit() {
    /*const data$ = interval(1000);
    data$.subscribe(value => this.get());*/
    this.getTotal()
    this.getTotalGroupe()
  }

  getTotal(){
      this.statistiqueService.totalTodo().subscribe(res=>{
        this.totalTodo= res
      })
    }

  getTotalGroupe(){
    this.statistiqueService.getTotalGroupe().subscribe(res=>{
      this.totalGroupe = res
    })
  }


  }

