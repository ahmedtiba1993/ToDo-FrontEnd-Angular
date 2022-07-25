import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AujourdhuiComponent } from './pages/aujourdhui/aujourdhui.component';
import { CorbeilleComponent } from './pages/corbeille/corbeille.component';
import { FaireComponent } from './pages/faire/faire.component';
import { GrTodoToutComponent } from './pages/groupetodo/grTodoTout/grTodoTout.component';
import { ImportantComponent } from './pages/important/important.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { OublieMdpComponent } from './pages/oublieMdp/oublieMdp.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TermineComponent } from './pages/termine/termine.component';
import { TodoModifierComponent } from './pages/todoModifier/todoModifier.component';
import { ToutComponent } from './pages/tout/tout.component';
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
    canActivate:[AppicationGuardService],
    children:[
      {
        path:'',component: AccueilComponent,
      },
      {
        path:'aujourdhui',component: AujourdhuiComponent,
      },
      {
        path:'faire',component: FaireComponent 
      },
      {
        path:'termine',component: TermineComponent 
      },
      {
        path:'tout',component: ToutComponent 
      },
      {
        path:'tout/:idGrTodo',component: ToutComponent 
      },
      {
        path:'corbeille',component: CorbeilleComponent 
      },
      {
        path:'important',component: ImportantComponent 
      },
      {
        path:'grtout/:idGrTodo',component: GrTodoToutComponent 
      },
      {
        path:'profile',component: ProfileComponent 
      },
      {
        path:'modifier/:idTodo',component: TodoModifierComponent 
      },


    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
