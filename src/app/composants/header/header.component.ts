import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StatistiqueService } from 'src/app/services/statistique/statistique.service';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  connectedUser : UtilisateurDto = {};

  constructor(    
    private userService : UserService,
    private router : Router,
    public translate: TranslateService
  ) {
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('fr');
   }

  ngOnInit() {
    this.connectedUser = this.userService.getConnectedUser();
  }

  logout(){
    localStorage.clear()
  }

  navigate(link : string){
    this.router.navigate([link])
  }
  
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
