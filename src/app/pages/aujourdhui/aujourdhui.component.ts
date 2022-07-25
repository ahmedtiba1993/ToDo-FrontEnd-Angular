import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-aujourdhui',
  templateUrl: './aujourdhui.component.html',
  styleUrls: ['./aujourdhui.component.scss']
})
export class AujourdhuiComponent implements OnInit {

  listTodo : Array<TodoDto> = []

  constructor(
    private todoService : TodoService
  ) { }

  ngOnInit() {
    this.findAllToday()
  }

  findAllToday(){
    this.todoService.findAllToday().subscribe(res=>{
      this.listTodo = res
    })
  }
}
