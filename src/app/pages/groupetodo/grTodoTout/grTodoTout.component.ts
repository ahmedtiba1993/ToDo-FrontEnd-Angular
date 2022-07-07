import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { GroupeTodoDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-grTodoTout',
  templateUrl: './grTodoTout.component.html',
  styleUrls: ['./grTodoTout.component.scss']
})
export class GrTodoToutComponent implements OnInit {
  
  test : any

  constructor(
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.test=params['idGrTodo']
  });
   }

}
