import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GroupetodoService } from 'src/app/services/groupetodo/groupetodo.service';
import { TodoService } from 'src/app/services/todo/todo.service';
import { GroupeTodoDto, TodoDto } from 'src/gs-api/src/models';
import { GroupeTodoControllerService } from 'src/gs-api/src/services';

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
  grTodo : GroupeTodoDto = {}
  idGrTodo = this.activatedRoute.snapshot.params['idGrTodo'];


  constructor(
    private todoService : TodoService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private groupetodoService : GroupetodoService,
    private groupeTodoControllerService : GroupeTodoControllerService,

  ) { }

  ngOnInit() {  
    this.activatedRoute.params.subscribe(params => {
      this.idGrTodo=params['idGrTodo']
      this.findAllTodo()
    });
    //this.findAllTodo()
  }

  findAllTodo(){
    if(this.idGrTodo){
      this.listTodo = []
      this.groupetodoService.findById(this.idGrTodo).subscribe(res=>{
        this.grTodo=res
        res.ligneGroupeTodo?.forEach(x=>{
          this.listTodo.push(x.todo!)
        })    
      })
    }else{
      this.todoService.findAllByUtilisateurId()
      .subscribe(res=>{
        this.listTodo = res;
      })
    }   
  }

  todoAjouter : GroupeTodoControllerService.AjouterTodoUsingPOSTParams={
    id : 0,
    dto :{}
  }
  ajouter(){
    if(this.idGrTodo){
      this.todoAjouter.id = this.idGrTodo!
      this.todoAjouter.dto = this.todo
      this.groupeTodoControllerService.ajouterTodoUsingPOST(this.todoAjouter).subscribe(res=>{
        this.findAllTodo()
        this.errorMessage = []
        this.todo = {}
      },error=>{
        this.errorMessage = error.error.errors
      })
    }else{
      this.todoService.enregistrerTodo(this.todo).subscribe(res=>{
        this.findAllTodo()
        this.todo={}
        this.errorMessage = []
      },error=>{
        this.errorMessage = error.error.errors
      })
    }
    
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
