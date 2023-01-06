import { Component, OnInit } from '@angular/core';
import { ModelDespachoI } from 'src/app/modelos/modelo.despachos';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelClientesI } from 'src/app/modelos/modelo.clientes';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';
import { GuardiasService } from 'src/app/servicios/guardias/guardias.service';
import { ModelGuardiasI } from 'src/app/modelos/modelo.guardias';
import { DespachosService } from 'src/app/servicios/despachos/despachos.service';

@Component({
  selector: 'app-compdespacho',
  templateUrl: './compdespacho.component.html',
  styleUrls: ['./compdespacho.component.scss']
})
export class CompdespachoComponent implements OnInit {

  clientes: ModelClientesI[] = [];
  guardias: ModelGuardiasI[] = [];

  formDespacho = new FormGroup({
    fecha_despacho: new FormControl(new Date),
    cantidad_libras: new FormControl(''),
    numero_tinas: new FormControl(''),
    ruta: new FormControl(''),
    observasiones: new FormControl(''),
    fk_tbl_cliente_cedula: new FormControl(''),
    fk_tbl_guardia_cedula: new FormControl('')
  })

  constructor(private clientesService: ClientesService, private guardiasservices: GuardiasService, private despachoServices:DespachosService) { }

  ngOnInit(): void {
    this.showAllClients()
    this.showAllGuards();
  }

  showAllClients() {
    this.clientesService.getAllClients().subscribe(
      (clientes: any) => {
        this.clientes = clientes

      },
      (error) => console.log(error)
    );
  }

  showAllGuards() {
    this.guardiasservices.getAllGuards().subscribe(
      (guardias: any) => {
        this.guardias = guardias
        console.log(this.guardias)
      },
      (error) => console.log(error)
    );
  }

  createDespacho(form: any) {
    this.despachoServices.saveDespacho(form).subscribe(data => {
      // this.router.navigateByUrl("/dashboard/pedido");
      // this.pedidosComponent.showAllOrders();

    })
  }


}
