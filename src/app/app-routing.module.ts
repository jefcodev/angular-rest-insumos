import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { GuardiasComponent } from './components/guardias/guardias/guardias.component';
import { PedidosComponent } from './components/pedidos/pedidos/pedidos.component';
import { CompedidosComponent } from './components/pedidos/compedidos/compedidos.component';
import { DespachosComponent } from './components/despachos/despachos.component';
import { IngresoInsumosComponent } from './components/ingreso-insumos/ingreso-insumos.component';
import { PrestamoTinasComponent } from './components/prestamo-tinas/prestamo-tinas.component';
import { CompdespachoComponent } from './components/despachos/compdespacho/compdespacho.component';
import { CompinsumosComponent } from './components/ingreso-insumos/compinsumos/compinsumos.component';
import { CompprestamoComponent } from './components/prestamo-tinas/compprestamo/compprestamo.component';
import { AutoridadesComponent } from './components/autoridades/autoridades.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },
  { path: "home", component: HomeComponent },
  { path: "cliente", component: ClientesComponent },
  { path: "guardia", component: GuardiasComponent },
  { path: "pedido", component: PedidosComponent },
  { path: "compedido", component: CompedidosComponent },
  { path: "despacho", component: DespachosComponent },
  { path: "insumos", component: DespachosComponent },
  { path: "prestamo", component: DespachosComponent },
  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: "home", component: HomeComponent },
      { path: "cliente", component: ClientesComponent },
      { path: "autoridad", component: AutoridadesComponent },

      { path: "guardia", component: GuardiasComponent },
      {
        path: "despacho", component: DespachosComponent, children: [
          { path: "compdespacho", component: CompdespachoComponent }
        ]
      },
      {
        path: "insumo", component: IngresoInsumosComponent, children: [
          { path: "compinsumo", component: CompinsumosComponent }
        ]
      },
      {
        path: "prestamo", component: PrestamoTinasComponent, children: [
          { path: "compprestamo", component: CompprestamoComponent }
        ]
      },

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
