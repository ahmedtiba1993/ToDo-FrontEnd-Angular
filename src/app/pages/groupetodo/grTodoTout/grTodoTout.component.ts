import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GroupetodoService } from 'src/app/services/groupetodo/groupetodo.service';
import { GroupeTodoDto, LigneGroupeTodoDto, TodoDto } from 'src/gs-api/src/models';
import { GroupeTodoControllerService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-grTodoTout',
  templateUrl: './grTodoTout.component.html',
  styleUrls: ['./grTodoTout.component.scss']
})
export class GrTodoToutComponent implements OnInit {
  
  title = 'test-time';
  currentDate:any = new Date();
  
  grTodo : GroupeTodoDto = {}
  todo : TodoDto = {}
  idGoupe: number | undefined
  errorMessage : Array<string> = [];

  constructor(
    private activatedRoute : ActivatedRoute,
    private groupetodoService : GroupetodoService,
    private groupeTodoControllerService : GroupeTodoControllerService,

  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.idGoupe=params['idGrTodo']
      this.findAllById()
    });
  }

  findAllById(){
    this.groupetodoService.findById(this.idGoupe!).subscribe(res=>{
      this.grTodo = res
    })
  }

  todoAjouter : GroupeTodoControllerService.AjouterTodoUsingPOSTParams={
    id : 0,
    dto :{}
  }
  ajouter(){
    this.todoAjouter.id = this.idGoupe!
    this.todoAjouter.dto = this.todo

    this.groupeTodoControllerService.ajouterTodoUsingPOST(this.todoAjouter).subscribe(res=>{
      this.ngOnInit()
      this.errorMessage = []
      this.todo = {}
    },error=>{
      this.errorMessage = error.error.errors
    })
  }

}
