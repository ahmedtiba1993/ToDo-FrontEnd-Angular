import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-aujourdhui',
  templateUrl: './aujourdhui.component.html',
  styleUrls: ['./aujourdhui.component.scss']
})
export class AujourdhuiComponent implements OnInit {

  title = 'test-time';
  currentDate:any = new Date();
  
  listTodo : Array<TodoDto> = []
  todo : TodoDto = {}
  errorMessage : Array<string> = []

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

  termine(td : TodoDto){
    this.todoService.termine(td.id!).subscribe(res=>{
      this.findAllToday()
    })
  }

  ajouter(){
    console.log(this.todo.dateTodo)
    this.todoService.enregistrerTodo(this.todo).subscribe(res=>{
      this.findAllToday()
      this.todo={}
      this.errorMessage = []
    },error=>{
      this.errorMessage = error.error.errors
    })
  }
}
