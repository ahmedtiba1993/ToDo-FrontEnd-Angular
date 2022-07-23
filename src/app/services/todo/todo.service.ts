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
    return this.todoService.saveUsingPOST1(todoDto)
  }

  findAll():Observable<TodoDto[]>{
    return this.todoService.findAllUsingGET1()
  }

  findAllByUtilisateurId(): Observable<TodoDto[]>{
    const id=this.userService.getConnectedUser().id
    return this.todoService.findAllByUtilisateurIdUsingGET1(id as number)
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

  corbeille(id : number):Observable<null>{
    return this.todoService.corbeilleUsingPOST(id)
  }

  findAllCorbeille():Observable<TodoDto[]>{
    const id=this.userService.getConnectedUser().id
    return this.todoService.findAllCorbeilleUsingGET(id as number)
  }

  delete(id : number):Observable<null>{
    return this.todoService.deleteUsingDELETE1(id)
  }

  important(id : number):Observable<null>{
    return this.todoService.importantUsingPOST(id)
  }

  findAllImportant():Observable<TodoDto[]>{
    const id=this.userService.getConnectedUser().id
    return this.todoService.findAllImportantUsingGET(id as number)
  }

  findById(id : number): Observable<TodoDto>{
    return this.todoService.findByIdUsingGET1(id)
  }

}
