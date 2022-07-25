import { DatePipe, formatDate ,registerLocaleData } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, PipeTransform, SimpleChanges } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-todoModifier',
  templateUrl: './todoModifier.component.html',
  styleUrls: ['./todoModifier.component.css']
})
export class TodoModifierComponent implements OnInit { 


  @Input()
  idTodoModifier = 0

  todoModifier : TodoDto = {}
  
  @Output() 
  todoM = new EventEmitter<string>();

  errorMessage : Array<string> = []
  successMessage : string =""

  title = 'test-time';
  currentDate:any = new Date();

  completeDate!: Date;
  localCompleteDate : string = ""
  
  datePipe = new DatePipe('en-US');
  

  constructor(
    private todoService : TodoService
  ) { }


  ngOnInit() {
  }

  modifier(){    
   this.todoService.enregistrerTodo(this.todoModifier).subscribe(res=>{
      this.successMessage = "Modifier ToDo avec succès"
      this.errorMessage = []
      this.todoM.emit('success')     
    },error=>{
      this.errorMessage = error.error.errors
    })
  }

  ngOnChanges(changes: SimpleChanges) 
  { 
    this.successMessage = ""
    this.errorMessage = []
    this.findTodo(changes['idTodoModifier'].currentValue)
  } 

  findTodo(id : number){
    this.todoService.findById(id).subscribe(res=>{
      this.todoModifier = res
      this.todoModifier.dateTodo = formatDate(this.todoModifier.dateTodo!,'yyyy-MM-ddThh:mm',"en-US")
     }) 
  }


 
}
