import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupetodoService } from 'src/app/services/groupetodo/groupetodo.service';
import { GroupeTodoDto } from 'src/gs-api/src/models';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuGroupeTodo : Array<GroupeTodoDto> = []
  public menuProperties : Array<Menu> =[
    /* Tableau de bord */
    /* Menu */
    {
      id: '1',
      titre: 'Tâches',
      icon: 'bi bi-graph-up-arrow',
      url: '',
      sousMenu:[
        {
          id: "11",
          titre: 'Tout',
          icon: 'bi bi-pie-chart',
          url: 'tout'
        },
        {
          id: "12",
          titre: 'A faire',
          icon: 'bi bi-pie-chart',
          url: 'faire'
        },
        {
          id: "13",
          titre: 'Terminé',
          icon: 'bi bi-bar-chart-line',
          url: 'termine'
        }
      ]
    },
    /** menu */
    {
      id: '2',
      titre: 'Ma journée',
      icon: 'ri-24-hours-fill',
      url: 'aujourdhui',
      sousMenu:[]
    },
    {
      id: '3',
      titre: 'Important',
      icon: 'ri-star-line',
      url: 'important',
      sousMenu:[]
    },
    {
      id: '4',
      titre: 'Corbeille',
      icon: 'ri-delete-bin-2-line',
      url: 'corbeille',
      sousMenu:[]
    }
    

  ]
  
  constructor(
    private router : Router,
    private grtodoService : GroupetodoService
  ) { }

  private lastSelectedMenu: Menu | undefined;

  ngOnInit() {
    this.findAllGroupeTodo()
  }

  navigate(menu : Menu){
    if(this.lastSelectedMenu){
      this.lastSelectedMenu.activate=false;
    }

    menu.activate = true;
    this.lastSelectedMenu=menu;
    this.router.navigate([menu.url]);
  }

  findAllGroupeTodo(){
    this.grtodoService.findAllByUtilisateurId().subscribe(res=>{
      this.menuGroupeTodo = res
    })
  }

}
