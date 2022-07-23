import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-todoModifier',
  templateUrl: './todoModifier.component.html',
  styleUrls: ['./todoModifier.component.css']
})
export class TodoModifierComponent implements OnInit {

  @Input()
  todoModifier : TodoDto = {}
  
  myform:any

  constructor(
    private formbuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.myform=this.formbuilder.group({
      libelleTodo :[],     
      descriptionTodo :[], 
      dateTodo:[]     
    })
  }

}
