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
    todoDto.etatTodo=false
    return this.todoService.saveUsingPOST(todoDto)
  }

  findAll():Observable<TodoDto[]>{
    return this.todoService.findAllUsingGET()
  }

  findAllByUtilisateurId(): Observable<TodoDto[]>{
    const id=this.userService.getConnectedUser().id
    return this.todoService.findAllByUtilisateurIdUsingGET(id as number)
  }

  termine(id : number):Observable<null>{
    return this.todoService.changerEtatUsingPOST(id);
  }

  findAllEnded(): Observable<TodoDto[]>{
    const id=this.userService.getConnectedUser().id
    return this.todoService.findAllEndedUsingGET(id as number)
  }

  findAllNotEnded(): Observable<TodoDto[]>{
    const id=this.userService.getConnectedUser().id
    return this.todoService.findAllNotEndedUsingGET(id as number)
  }

}
