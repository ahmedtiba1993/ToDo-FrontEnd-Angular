import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.scss']
})
export class ImportantComponent implements OnInit {

  listTodo : Array<TodoDto> = []

  constructor(
    private todoService : TodoService
  ) { }

  ngOnInit() {
    this.findAllImportant()
  }

  findAllImportant(){
    this.todoService.findAllImportant().subscribe(res=>{
      this.listTodo=res
    })
  }

  nonTermine(td : TodoDto){
    this.todoService.termine(td.id!).subscribe(res=>{
      this.findAllImportant()
    })
  }

  confirmerEtSupprimerTodo(td : TodoDto){
    this.todoService.corbeille(td.id!).subscribe(res=>{
      this.findAllImportant()
    })
  }

  termine(td : TodoDto){
    this.todoService.termine(td.id!).subscribe(res=>{
      this.findAllImportant()
    })
  }

  importat(td : TodoDto){
    this.todoService.important(td.id!).subscribe(res=>{
      this.findAllImportant()
    })
  }
}
