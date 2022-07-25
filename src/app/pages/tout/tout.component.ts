import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PdfService } from 'src/app/services/pdf/pdf.service';
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
  todo : TodoDto = {}
  errorMessage : Array<string> = []
  idTodoModifier : number = 0

  constructor(
    private todoService : TodoService,
    private router : Router
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
  
  ajouter(){
    this.todoService.enregistrerTodo(this.todo).subscribe(res=>{
      this.findAllTodo()
      this.todo={}
      this.errorMessage = []
    },error=>{
      this.errorMessage = error.error.errors
    })
  }

  confirmerEtSupprimerTodo(td : TodoDto){
    this.todoService.corbeille(td.id!).subscribe(res=>{
      this.findAllTodo()
    })
  }

  termine(td : TodoDto){
    this.todoService.termine(td.id!).subscribe(res=>{
      this.findAllTodo()
    })
  }

  importat(td : TodoDto){
    this.todoService.important(td.id!).subscribe(res=>{
      this.findAllTodo()
    })
  }

  navigate(t : TodoDto){
    this.router.navigate(['modifier',t.id])
  }

  setModifier(t:TodoDto){
    this.idTodoModifier = t.id!
  }

  handleSuppression( event : any){
    if(event == 'success'){
      this.findAllTodo();
    }
  }

  
}
