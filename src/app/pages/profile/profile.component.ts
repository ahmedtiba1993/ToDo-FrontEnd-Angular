import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    
  utilisateurDto : UtilisateurDto = {}

  a = "ahmed"

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.findutilisateur()
  }

  findutilisateur(){
    this.userService.getUserByEmail(this.userService.getConnectedUser().email!).subscribe(res=>{
      this.utilisateurDto = res
    })
  }

}
