import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StatistiqueService } from 'src/app/services/statistique/statistique.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(
    private statistiqueService : StatistiqueService
  ) { }


  total : any
  totalGroupe : any

  ngOnInit() {
    /*const data$ = interval(1000);
    data$.subscribe(value => this.get());*/
    this.getTotal()
    this.totalGroupe=this.getTotalGroupe()
  }
  getTotal(){
      this.statistiqueService.totalTodo().subscribe(res=>{
        this.total= res
      })
    }

  getTotalGroupe(){
    this.statistiqueService.getTotalGroupe().subscribe(res=>{
      this.totalGroupe = res
    })
  }


  }

