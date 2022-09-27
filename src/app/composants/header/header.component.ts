import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
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
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('fr');
   }

  ngOnInit() {
    this.connectedUser = this.userService.getConnectedUser();
  }

  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
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
