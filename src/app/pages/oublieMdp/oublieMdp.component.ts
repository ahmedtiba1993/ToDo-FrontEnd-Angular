import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { PasswordResetTokenDto, UtilisateurDto } from 'src/gs-api/src/models';
import { UtilisateurControllerService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-oublieMdp',
  templateUrl: './oublieMdp.component.html',
  styleUrls: ['./oublieMdp.component.scss']
})
export class OublieMdpComponent implements OnInit {

  utilisateurDto : UtilisateurDto = {}
  foundUtilisateur : boolean = false
  continue : boolean = false
  errorMessage : Array<string> = [];
  passwordResetTokenDto : PasswordResetTokenDto = {}
  veriftoken = false
  
  constructor(
    private router : Router,
    private userService : UserService ,
    private utilisateurService : UtilisateurControllerService
  ) { }

  ngOnInit() {
  }

  cancel(){
    this.router.navigate(["login"])
  }

  recherche(){
    this.userService.getUserByEmail(this.utilisateurDto.email!).subscribe(res=>{
      this.foundUtilisateur = true
      this.utilisateurDto.nom = res.nom
      this.utilisateurDto.prenom = res.prenom
      this.utilisateurDto.email = res.email
      this.utilisateurDto.id = res.id
    },error =>{
      this.errorMessage = error.error.message;
    })
  }

  annuler(){
    this.foundUtilisateur = false
    this.utilisateurDto = {}
    this.router.navigate(["oublieMdp"])
  }

  continuer(){
    this.userService.changerMdpDemande(this.utilisateurDto.email!).subscribe(res=>{
      this.foundUtilisateur = false
      this.continue = true
      this.errorMessage = []
    })
  }

   verif : UtilisateurControllerService.VeriftokenChangerMdpUsingGETParams = {
    idutilisateur: 0,
    token: ""
  };
  
  verifierToken(){

      this.verif.idutilisateur=this.utilisateurDto.id!
      this.verif.token!=this.passwordResetTokenDto.token

      this.utilisateurService.veriftokenChangerMdpUsingGETResponse(this.verif).subscribe(res=>{
      this.errorMessage = []
      this.continue=false
      this.foundUtilisateur=false
      this.veriftoken=true
    },error =>{
      this.errorMessage = error.error.errors;
      console.log(this.errorMessage)
    })
  }
  changer : UtilisateurControllerService.ChangerMdpUsingPOSTParams = {
    token: "",
    mdp : "",
    idutilisateur : 0,
    confirmerMdp : ""
  }
  
  changerMdp(){

    this.changer.idutilisateur = this.utilisateurDto.id!
    this.changer.token = this.verif.token
    this.changer.mdp = this.utilisateurDto.mdp!
    this.changer.confirmerMdp! = this.utilisateurDto.confirmerMdp!

    this.utilisateurService.changerMdpUsingPOST(this.changer).subscribe(res =>{
      this.router.navigate(["login"])
    },error =>{
      this.errorMessage = error.error.errors
    })
  }

  cancelTout(){
    this.router.navigate(["login"])
  }
}

