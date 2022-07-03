import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-tout',
  templateUrl: './tout.component.html',
  styleUrls: ['./tout.component.scss']
})
export class ToutComponent implements OnInit {
  
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
