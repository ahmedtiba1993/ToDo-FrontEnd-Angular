import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { GroupeTodoDto, TodoDto } from 'src/gs-api/src/models';
import { GroupeTodoControllerService } from 'src/gs-api/src/services';
import { TodoService } from '../todo/todo.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class GroupetodoService {

constructor(
  private grtodoService : GroupeTodoControllerService,
  private userService : UserService
  ) { }

  enregistrerGroupeTodo(dto : GroupeTodoDto):Observable<GroupeTodoDto>{
    dto.utilisateur = this.userService.getConnectedUser()
    return this.grtodoService.saveUsingPOST(dto)
  }

  findAll():Observable<GroupeTodoDto[]>{
    return this.grtodoService.findAllUsingGET()
  }

  findAllByUtilisateurId(): Observable<GroupeTodoDto[]>{
    const id=this.userService.getConnectedUser().id
    return this.grtodoService.findAllByUtilisateurIdUsingGET(id as number)
  }

  findById(id : number):Observable<GroupeTodoDto>{
    return this.grtodoService.findByIdUsingGET(id)
  }

}
