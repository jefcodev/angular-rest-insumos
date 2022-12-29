import { Component, OnInit } from '@angular/core';
import { ModelPedidosI } from 'src/app/modelos/modelo.pedidos';
import { PedidosService } from 'src/app/servicios/pedidos/pedidos.service';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  
  orders: ModelPedidosI[] = [];

  constructor(private pedidoServices:PedidosService) { }

  ngOnInit(): void {
    this.showAllOrders();
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

}
