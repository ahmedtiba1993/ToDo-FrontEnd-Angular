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
  todo : TodoDto = {}
  errorMessage : Array<string> = []

  constructor(
    private todoService : TodoService
  ) { }

  ngOnInit() {
    this.findAllNotEnded()
  }

  findAllNotEnded(){
    this.todoService.findAllNotEnded()
    .subscribe(res=>{
      this.listTodo = res;
    })
  }

  ajouter(){
    this.todoService.enregistrerTodo(this.todo).subscribe(res=>{
      this.findAllNotEnded()
      this.errorMessage = []
    },error=>{
      this.errorMessage = error.error.errors
    })
  }

  termine(td : TodoDto){
    this.todoService.termine(td.id!).subscribe(res=>{
      this.findAllNotEnded()
    })
  }


}
