import { Component, Inject, OnInit } from '@angular/core';
import { StatistiqueService } from 'src/app/services/statistique/statistique.service';
import { ChartType } from 'angular-google-charts';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  
  totalTodo : number = 0
  totalGroupe : number = 0
  totalEnded : number = 0
  totalNotEnded : number = 0

  constructor(
    private statistiqueService : StatistiqueService,
  ) { }

  

  ngOnInit() {
    /*const data$ = interval(1000);
    data$.subscribe(value => this.get());*/
    this.getTotal()
    this.getTotalGroupe()
    this.getTotalEnded()
    this.getTotalNotEnded()
  }

  getTotal(){
      this.statistiqueService.totalTodo().subscribe(res=>{
        this.totalTodo = res
      })
    }
  

  getTotalGroupe(){
    this.statistiqueService.getTotalGroupe().subscribe(res=>{
      this.totalGroupe = res
    })
  }

  getTotalEnded(){
    this.statistiqueService.getTotalTodoEnded().subscribe(res=>{
      this.totalEnded = res
    })
  }

  getTotalNotEnded(){
    this.statistiqueService.getTotalTodoNotEnded().subscribe(res=>{
      this.totalNotEnded = res
    })
  }

}

