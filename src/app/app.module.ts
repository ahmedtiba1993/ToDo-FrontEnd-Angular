import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './composants/chart/chart.component';
import { HeaderComponent } from './composants/header/header.component';
import { LoaderComponent } from './composants/loader/loader.component';
import { MenuComponent } from './composants/menu/menu.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AujourdhuiComponent } from './pages/aujourdhui/aujourdhui.component';
import { CorbeilleComponent } from './pages/corbeille/corbeille.component';
import { FaireComponent } from './pages/faire/faire.component';
import { GrTodoFaireComponent } from './pages/groupetodo/grTodoFaire/grTodoFaire.component';
import { GrTodoToutComponent } from './pages/groupetodo/grTodoTout/grTodoTout.component';
import { ImportantComponent } from './pages/important/important.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { OublieMdpComponent } from './pages/oublieMdp/oublieMdp.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { TermineComponent } from './pages/termine/termine.component';
import { ToutComponent } from './pages/tout/tout.component';
import { HttpInterceptorService } from './services/HttpInterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FaireComponent,
    LoginComponent,
    PageDashboardComponent,
    InscriptionComponent,
    OublieMdpComponent,
    LoaderComponent,
    AujourdhuiComponent,
    TermineComponent,
    ToutComponent,
    CorbeilleComponent,
    ImportantComponent,
    AccueilComponent,
    GrTodoFaireComponent,
    GrTodoToutComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
    
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : HttpInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
