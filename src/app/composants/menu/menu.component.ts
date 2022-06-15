import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties : Array<Menu> =[
    /* Tableau de bord */
    {
      id: '1',
      titre: 'Tâches',
      icon: 'bi bi-graph-up-arrow',
      url: '',
      sousMenu:[
        {
          id: "11",
          titre: 'A faire',
          icon: 'bi bi-pie-chart',
          url: ''
        },
        {
          id: "12",
          titre: 'Terminé',
          icon: 'bi bi-bar-chart-line',
          url: 'statistiques'
        }
      ]
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
