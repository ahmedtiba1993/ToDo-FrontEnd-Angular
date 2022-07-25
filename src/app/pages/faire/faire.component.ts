import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoDto } from 'src/gs-api/src/models';

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

  idTodoModifier : number = 0

  constructor(
    private todoService : TodoService,
    private pdfService : PdfService
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
      this.todo={}
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

  confirmerEtSupprimerTodo(td : TodoDto){
    this.todoService.corbeille(td.id!).subscribe(res=>{
      this.findAllNotEnded()
    })
  }

  importat(td : TodoDto){
    this.todoService.important(td.id!).subscribe(res=>{
      this.findAllNotEnded()
    })
  }

  pdf(action : string){
    if(action == "open"){
      this.pdfService.openPDF()
    }else{
      this.pdfService.downloadPDF()
    }
  }

  setModifier(t:TodoDto){
    this.idTodoModifier = t.id!
  }

  
  handleSuppression( event : any){
    if(event == 'success'){
      this.findAllNotEnded();
    }
  }
}
