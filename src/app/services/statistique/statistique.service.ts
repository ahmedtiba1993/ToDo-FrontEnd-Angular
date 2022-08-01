import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoDto } from 'src/gs-api/src/models';
import { GroupeTodoControllerService, StatistiqueControllerService, TodoControllerService } from 'src/gs-api/src/services';
import { TodoService } from '../todo/todo.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

 listTodo : Array<TodoDto> = []
 num : number = 0

constructor(
  private userService : UserService,
  private statistiqueService : StatistiqueControllerService
) { }

   totalTodo():Observable<number>{
    const id=this.userService.getConnectedUser().id
    return this.statistiqueService.totalTodoUsingGET(id as number)
  }

  getTotalGroupe():Observable<number>{
    const id=this.userService.getConnectedUser().id
    return this.statistiqueService.totalGroupeTodoUsingGET(id as number)
  }

  getTotalTodoEnded():Observable<number>{
    const id=this.userService.getConnectedUser().id
    return this.statistiqueService.totalTodoEndedUsingGET(id as number)
  }

  getTotalTodoNotEnded():Observable<number>{
    const id=this.userService.getConnectedUser().id
    return this.statistiqueService.totalTodoNotEndedUsingGET(id as number)
  }

}
