import { Component, OnInit } from '@angular/core';
import { ModelPedidosI } from 'src/app/modelos/modelo.pedidos';
import { PedidosService } from 'src/app/servicios/pedidos/pedidos.service';
import { ModelClientesI } from '../../../modelos/modelo.clientes';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { identifierName } from '@angular/compiler/public_api';
import Swal from 'sweetalert2';


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
    fecha_entrega: new FormControl('', [Validators.required]),
    cantidad_libras: new FormControl('', [Validators.required]),
    ruta: new FormControl('', [Validators.required]),
    observasiones: new FormControl(''),
    fk_tbl_cliente_cedula: new FormControl('', [Validators.required])
  });


  constructor(private pedidoServices: PedidosService,
    private clientesService: ClientesService) { }

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
      fk_tbl_cliente_cedula: null
    })
    console.log("Imprimiendo ", this.formPedidoA.valueChanges)

    this.showAllClients();
  }

  updateOrders(form: any) {
    if (this.formPedidoA.valid) {
      this.pedidoServices.updateOrders(form).subscribe(data => {

        this.showModalMore('center', 'success', 'Pedido actualizado correctamente', false, 1500);
        this.showAllOrders()
      })
    } else {
      this.ShowModal('Pedido', 'Error al actualizar pedido', 'error');

    }

  }
  ShowModal(title: any, infor: any, tipo: any) {
    Swal.fire(title, infor, tipo);
  }
  showModalMore(position: any, icon: any, title: any, showConfirmButton: any, timer: any) {
    Swal.fire({
      position: position,
      icon: icon,
      title: title,
      showConfirmButton: showConfirmButton,
      timer: timer
    });
  }
  get fecha_entrega() { return this.formPedidoA.get('fecha_entrega'); }
  get fk_tbl_cliente_cedula() { return this.formPedidoA.get('fk_tbl_cliente_cedula'); }
  get cantidad_libras() { return this.formPedidoA.get('cantidad_libras'); }
  get ruta() { return this.formPedidoA.get('ruta'); }
  get observasiones() { return this.formPedidoA.get('observasiones'); }

}
