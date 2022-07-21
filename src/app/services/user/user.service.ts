import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationRequest, AuthenticationResponse, PasswordResetTokenDto, UtilisateurDto } from 'src/gs-api/src/models';
import { AuthenticationControllerService, UtilisateurControllerService} from 'src/gs-api/src/services';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  constructor( 
      private authenticationService : AuthenticationControllerService ,
      private router:Router,
      private utilisateurService : UtilisateurControllerService
      ) { }


  login(authenticationRequest:AuthenticationRequest):Observable<AuthenticationResponse> {
    return this.authenticationService.authenticateUsingPOST(authenticationRequest);   
  }

  setAccessToken(authenticatcationResponse:AuthenticationResponse):void{
    localStorage.setItem("accessToken",JSON.stringify(authenticatcationResponse));
  }

  getUserByEmail(email : string): Observable<UtilisateurDto>{
      return this.utilisateurService.findByEmailUsingGET(email);
  }

  setConnectedUser(utilisateur : UtilisateurDto) : void{
    localStorage.setItem('connectedUser' , JSON.stringify(utilisateur))
  }

  getConnectedUser() : UtilisateurDto{   
    return JSON.parse(localStorage.getItem('connectedUser') as string)
  }

  sincrire( utilisateur:UtilisateurDto):Observable<UtilisateurDto>{
    return this.utilisateurService.saveUsingPOST2(utilisateur);
  }

  changerMdpDemande(email : string):Observable<null>{
    return this.utilisateurService.demandeChangerMdpUsingPOST(email);
  }
  
}