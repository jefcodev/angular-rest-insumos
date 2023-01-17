import { Component, OnInit } from '@angular/core';
import { ModelDespachoI } from 'src/app/modelos/modelo.despachos';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelClientesI } from 'src/app/modelos/modelo.clientes';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';
import { GuardiasService } from 'src/app/servicios/guardias/guardias.service';
import { ModelGuardiasI } from 'src/app/modelos/modelo.guardias';
import { DespachosService } from 'src/app/servicios/despachos/despachos.service';
import { DespachosComponent } from '../despachos.component';
import Swal from 'sweetalert2';

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

  constructor(private clientesService: ClientesService,
    private guardiasservices: GuardiasService,
    private despachoServices: DespachosService,
    private router: Router,
    private despachoComponent: DespachosComponent) { }

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
        // this.showModalMore('center', 'success', 'Despacho registrado exitosamente', false, 2000);
      },
      (error) => console.log(error)
      // this.ShowModal('Pedido', 'Error al registrar pedido', 'error');

    );
  }

  createDespacho(form: any) {
    this.despachoServices.saveDespacho(form).subscribe(data => {
      this.router.navigateByUrl("/dashboard/despacho");
      this.despachoComponent.showAllDespachos();
    })
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

  // get fecha_entrega() { return this.formPedido.get('fecha_entrega'); }

}
