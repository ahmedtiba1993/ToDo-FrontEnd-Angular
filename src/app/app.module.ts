import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { MenuComponent } from './composants/menu/menu.component';
import { FaireComponent } from './pages/faire/faire.component';
import { LoginComponent } from './pages/login/login.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FaireComponent,
    LoginComponent,
    PageDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
