import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  utilisateurDto : UtilisateurDto = {}
  success : boolean = false;
  errorMsg : Array<string> = [];
  chacked : boolean = false

  constructor(
    private userService : UserService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  inscrire(){
    if(this.chacked==false){
      this.errorMsg.push("il faut accepter les termes et conditions")
    }else{
      this.userService.sincrire(this.utilisateurDto).subscribe(utlisateur =>{
        this.errorMsg = []
        this.success = true
      },error =>{
        this.success = false
        this.errorMsg = error.error.errors;
      })
    }    
  }

}
