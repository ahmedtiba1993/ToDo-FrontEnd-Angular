import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoDto } from 'src/gs-api/src/models';
import { GroupeTodoControllerService, TodoControllerService } from 'src/gs-api/src/services';
import { TodoService } from '../todo/todo.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

 listTodo : Array<TodoDto> = []

constructor(
  private todoService : TodoControllerService,
  private userService : UserService,
  private groupeTodoervice : GroupeTodoControllerService
) { }

   totalTodo():Observable<number>{
    const id=this.userService.getConnectedUser().id
    return this.todoService.totalTodoUsingGET(id as number)
  }

  getTotalGroupe():Observable<number>{
    const id=this.userService.getConnectedUser().id
    return this.groupeTodoervice.totalGrTodoUsingGET(id as number)
  }


}
