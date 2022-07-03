import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-termine',
  templateUrl: './termine.component.html',
  styleUrls: ['./termine.component.scss']
})
export class TermineComponent implements OnInit {

  listTodo : Array<TodoDto> = []

  constructor(
    private todoService : TodoService
  ) { }

  ngOnInit() {
    this.findAll()
  }

  findAll(){
    this.todoService.findAllEnded().subscribe(res=>{
      this.listTodo = res
    })
  }
}
