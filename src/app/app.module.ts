import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { GuardiasComponent } from './components/guardias/guardias/guardias.component';
import { CompedidosComponent } from './components/pedidos/compedidos/compedidos.component';
import { PedidosComponent } from './components/pedidos/pedidos/pedidos.component';
import { DespachosComponent } from './components/despachos/despachos.component';
import { PrestamoTinasComponent } from './components/prestamo-tinas/prestamo-tinas.component';
import { IngresoInsumosComponent } from './components/ingreso-insumos/ingreso-insumos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    ClientesComponent,
    GuardiasComponent,
    CompedidosComponent,
    PedidosComponent,
    DespachosComponent,
    PrestamoTinasComponent,
    IngresoInsumosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
