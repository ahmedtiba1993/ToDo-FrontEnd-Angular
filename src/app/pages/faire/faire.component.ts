import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoDto } from 'src/gs-api/src/models';
import { TodoControllerService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-faire',
  templateUrl: './faire.component.html',
  styleUrls: ['./faire.component.scss']
})
export class FaireComponent implements OnInit {

  title = 'test-time';
  currentDate:any = new Date();
  
  listTodo : Array<TodoDto> = []

  constructor(
    private todoService : TodoService
  ) { }

  ngOnInit() {
    this.findAllTodo()
  }

  findAllTodo(){
    this.todoService.findAllByUtilisateurId()
    .subscribe(res=>{
      this.listTodo = res;
    })
  }

}
