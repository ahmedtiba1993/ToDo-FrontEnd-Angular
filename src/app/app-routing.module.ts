import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { OublieMdpComponent } from './pages/oublieMdp/oublieMdp.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { AppicationGuardService } from './services/guard/appication-guard.service';

const routes: Routes = [
  {
    path :'login',component: LoginComponent 
  },
  {
    path :'inscrire',component: InscriptionComponent 
  },
  {
    path :'oublieMdp',component: OublieMdpComponent 
  },
  {
    path :'',component: PageDashboardComponent,
    canActivate:[AppicationGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
