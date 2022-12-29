import { Component, OnInit } from '@angular/core';
import { ModelClientesI } from 'src/app/modelos/modelo.clientes';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';
import { PedidosService } from '../../../servicios/pedidos/pedidos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compedidos',
  templateUrl: './compedidos.component.html',
  styleUrls: ['./compedidos.component.scss']
})
export class CompedidosComponent implements OnInit {

  clientes: ModelClientesI[] = [];
  constructor(private clientesService: ClientesService, private pedidosService:PedidosService,  private router: Router) { }

  formPedido = new FormGroup({
    fecha_pedido: new FormControl(new Date),
    fecha_entrega: new FormControl(''),
    cantidad_libras: new FormControl(''),
    ruta: new FormControl(''),
    observasiones: new FormControl(''),
    fk_tbl_cliente_cedula: new FormControl('')
  })


  ngOnInit(): void {
    this.showAllClients();
  }
  showAllClients() {
    this.clientesService.getAllClients().subscribe(
      (clientes: any) => {
        this.clientes = clientes
        console.log("Imprimiendo clientes de compedidos: " + this.clientes)
      },
      (error) => console.log(error)
    );
  }

  createPedido(form: any) {
    this.pedidosService.saveOrders(form).subscribe(data => {
      this.router.navigateByUrl("/dashboard/pedido");
      

    })
  }

}
