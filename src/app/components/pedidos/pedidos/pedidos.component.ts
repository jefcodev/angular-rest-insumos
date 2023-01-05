import { Component, OnInit } from '@angular/core';
import { ModelPedidosI } from 'src/app/modelos/modelo.pedidos';
import { PedidosService } from 'src/app/servicios/pedidos/pedidos.service';
import { ModelClientesI } from '../../../modelos/modelo.clientes';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  clientes: ModelClientesI[] = [];
  orders: ModelPedidosI[] = [];

  constructor(private pedidoServices: PedidosService, private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.showAllOrders();
    this.showAllClients();
  }
  showAllClients() {
    this.clientesService.getAllClients().subscribe(
      (clientes: any) => {
        this.clientes = clientes

      },
      (error) => console.log(error)
    );
  }
  showAllOrders() {
    this.pedidoServices.getAllOrders().subscribe(
      (orders: any) => {
        this.orders = orders
        console.log(this.orders)
      },
      (error) => console.log(error)
    );
  }
  getDataOrders() {
    this.showAllClients();
  }
}
