import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { GuardiasComponent } from './components/guardias/guardias/guardias.component';
import { PedidosComponent } from './components/pedidos/pedidos/pedidos.component';
import { CompedidosComponent } from './components/pedidos/compedidos/compedidos.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },
  { path: "home", component: HomeComponent },
  { path: "cliente", component: ClientesComponent },
  { path: "guardia", component: GuardiasComponent },
  {path: "pedido", component: PedidosComponent},
  { path: "compedido", component: CompedidosComponent },
  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: "home", component: HomeComponent },
      { path: "cliente", component: ClientesComponent },
      { path: "guardia", component: GuardiasComponent },
      {
        path: "pedido", component: PedidosComponent, children: [
          { path: "compedido", component: CompedidosComponent }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
