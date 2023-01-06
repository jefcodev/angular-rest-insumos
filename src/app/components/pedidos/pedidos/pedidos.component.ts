import { Component, OnInit } from '@angular/core';
import { ModelPedidosI } from 'src/app/modelos/modelo.pedidos';
import { PedidosService } from 'src/app/servicios/pedidos/pedidos.service';
import { ModelClientesI } from '../../../modelos/modelo.clientes';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  clientes: ModelClientesI[] = [];
  fecha: "2000-03-20" | undefined;
  orders: ModelPedidosI[] = [];
  formPedidoA = new FormGroup({
    id_pedido: new FormControl(''),
    fecha_pedido: new FormControl(new Date),
    fecha_entrega: new FormControl(''),
    cantidad_libras: new FormControl(''),
    ruta: new FormControl(''),
    observasiones: new FormControl(''),
    fk_tbl_cliente_cedula: new FormControl('')
  });


  constructor(private pedidoServices: PedidosService, private clientesService: ClientesService,) { }

  ngOnInit(): void {
    this.showAllOrders();
    // this.showAllClients();
    // this.fecha="2000-03-20";
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
  getDataOrders(id_pedido: any, fecha_entrega: any, cantidad_libras:
    any, ruta: any, observaciones: any, cliente: any) {
    this.formPedidoA.patchValue({
      id_pedido: id_pedido,
      fecha_pedido: new Date,
      fecha_entrega: fecha_entrega,
      cantidad_libras: cantidad_libras,
      ruta: ruta,
      observasiones: observaciones,
      fk_tbl_cliente_cedula: cliente
    })
    console.log("Imprimiendo ", this.formPedidoA)

    this.showAllClients();
  }

  updateOrders(form: any) {
    this.pedidoServices.updateOrders(form).subscribe(data => {
      this.showAllOrders()
    })
    console.log(form)
  }
}
