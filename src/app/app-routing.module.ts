import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { AppicationGuardService } from './services/guard/appication-guard.service';

const routes: Routes = [
  {
    path :'login',component: LoginComponent 
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
