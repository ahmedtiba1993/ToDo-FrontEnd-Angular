import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.scss']
})
export class CorbeilleComponent implements OnInit {
  
  listTodo : Array<TodoDto> = []

  constructor(
    private todoService : TodoService
  ) { }

  ngOnInit( ) {
    this.findAllCorbeille()
  }

  findAllCorbeille(){
    this.todoService.findAllCorbeille().subscribe(res=>{
      this.listTodo=res
    })
  }

  restaurer(td : TodoDto){
    this.todoService.corbeille(td.id!).subscribe(res=>{
      this.findAllCorbeille()
    })
  }

  delete(td : TodoDto){
    this.todoService.delete(td.id!).subscribe(res=>{
      this.findAllCorbeille()
    })
  }
}
