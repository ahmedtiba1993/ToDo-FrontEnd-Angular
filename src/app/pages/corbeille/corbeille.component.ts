import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupetodoService } from 'src/app/services/groupetodo/groupetodo.service';
import { TodoService } from 'src/app/services/todo/todo.service';
import { GroupeTodoDto, TodoDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.scss']
})
export class CorbeilleComponent implements OnInit {
  
  listTodo : Array<TodoDto> = []
  idGrTodo = this.activatedRoute.snapshot.params['idGrTodo'];
  grTodo : GroupeTodoDto = {}

  constructor(
    private todoService : TodoService,
    private activatedRoute : ActivatedRoute,
    private groupetodoService : GroupetodoService

  ) { }

  ngOnInit( ) {
    this.activatedRoute.params.subscribe(params => {
      this.idGrTodo=params['idGrTodo']
      this.findAllCorbeille()
    });
    //this.findAllCorbeille()
  }

  findAllCorbeille(){
    if(this.idGrTodo){
      this.groupetodoService.findById(this.idGrTodo).subscribe(res=>{
        this.grTodo=res
        res.ligneGroupeTodo?.forEach(x=>{
          if(x.todo?.corbeille == true)
          this.listTodo.push(x.todo!)
        })  
      })
    }else{
      this.todoService.findAllCorbeille().subscribe(res=>{
        this.listTodo=res
      })
    }
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
