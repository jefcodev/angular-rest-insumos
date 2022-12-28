import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/clientes/clientes.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
