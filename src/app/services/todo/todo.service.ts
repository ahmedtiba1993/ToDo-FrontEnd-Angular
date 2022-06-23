import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoDto } from 'src/gs-api/src/models';
import { TodoControllerService } from 'src/gs-api/src/services';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

constructor(
  private todoService : TodoControllerService,
  private userService : UserService
) { }

  enregistrerTodo(todoDto : TodoDto):Observable<TodoDto>{
    todoDto.utilisateur = this.userService.getConnectedUser()
    return this.todoService.saveUsingPOST(todoDto)
  }

  findAll():Observable<TodoDto[]>{
    return this.todoService.findAllUsingGET()
  }

  findAllByUtilisateurId(): Observable<TodoDto[]>{
    const id=this.userService.getConnectedUser().id
    return this.todoService.findAllByUtilisateurIdUsingGET(id as number)
  }

}
