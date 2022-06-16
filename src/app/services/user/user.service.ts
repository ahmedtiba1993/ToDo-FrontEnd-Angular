import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationRequest, AuthenticationResponse, UtilisateurDto } from 'src/gs-api/src/models';
import { AuthenticationControllerService} from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( 
      private authenticationService : AuthenticationControllerService ,
      private router:Router,
      ) { }


  login(authenticationRequest:AuthenticationRequest):Observable<AuthenticationResponse> {
    return this.authenticationService.authenticateUsingPOST(authenticationRequest);   
  }

  setAccessToken(authenticatcationResponse:AuthenticationResponse):void{
    localStorage.setItem("accessToken",JSON.stringify(authenticatcationResponse));
  }

 /* setConnectedUser(authenticatcationResponse : AuthenticationResponse) : void{
    localStorage.setItem('accessToken',JSON.stringify(authenticatcationResponse))
  }*/

  setConnectedUser(utilisateur : UtilisateurDto) : void{
    localStorage.setItem('connectedUser' , JSON.stringify(utilisateur))
  }
}

