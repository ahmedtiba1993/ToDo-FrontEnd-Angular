import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupeTodoDto } from 'src/gs-api/src/models';
import { GroupeTodoControllerService } from 'src/gs-api/src/services';
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

}
