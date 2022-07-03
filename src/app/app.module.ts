import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { LoaderComponent } from './composants/loader/loader.component';
import { MenuComponent } from './composants/menu/menu.component';
import { AujourdhuiComponent } from './pages/aujourdhui/aujourdhui.component';
import { FaireComponent } from './pages/faire/faire.component';
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
    ToutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : HttpInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
