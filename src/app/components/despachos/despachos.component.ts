import { Component, OnInit } from '@angular/core';
import { ModelDespachoI } from 'src/app/modelos/modelo.despachos';
import { DespachosService } from 'src/app/servicios/despachos/despachos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModelClientesI } from '../../modelos/modelo.clientes';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';
import { ModelGuardiasI } from '../../modelos/modelo.guardias';
import { GuardiasService } from 'src/app/servicios/guardias/guardias.service';


@Component({
  selector: 'app-despachos',
  templateUrl: './despachos.component.html',
  styleUrls: ['./despachos.component.scss']
})
export class DespachosComponent implements OnInit {

  despachos: ModelDespachoI[] = [];
  clientes: ModelClientesI[] = [];
  guardias: ModelGuardiasI[] = [];


  formDespacho = new FormGroup({
    id_despacho: new FormControl(''),
    fecha_despacho: new FormControl(),
    cantidad_libras: new FormControl(''),
    numero_tinas: new FormControl(''),
    ruta: new FormControl(''),
    observasiones: new FormControl(''),
    fk_tbl_cliente_cedula: new FormControl(''),
    fk_tbl_guardia_cedula: new FormControl('')
  });

  constructor(private despachoServicio: DespachosService,
    private clientesService: ClientesService,
     private guardiasService: GuardiasService,
     private despachoServices:DespachosService) { }

  ngOnInit(): void {
    this.showAllDespachos();
  }

  getDataDespachos(id_despacho: any, fecha_despacho: any, cantidad_libras:
    any, numero_tinas: any, ruta: any, observaciones: any, cliente: any, guardia: any) {
    this.formDespacho.patchValue({
      id_despacho: id_despacho,
      fecha_despacho: new Date,
      cantidad_libras: cantidad_libras,
      numero_tinas: numero_tinas,
      ruta: ruta,
      observasiones: observaciones,
      fk_tbl_cliente_cedula: cliente,
      fk_tbl_guardia_cedula: guardia
    })
    console.log("Imprimiendo ", this.formDespacho)

    this.showAllClients();
    this.showAllGuards();
  }

  showAllDespachos() {
    this.despachoServicio.getAllDespachos().subscribe(
      (despachos: any) => {
        this.despachos = despachos
        console.log(this.despachos)
      },
      (error) => console.log(error)
    );
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
    this.guardiasService.getAllGuards().subscribe(
      (guardias: any) => {
        this.guardias = guardias

      },
      (error) => console.log(error)
    );
  }

  updateDespacho(form: any) {
    this.despachoServices.updateDepachos(form).subscribe(data => {
      this.showAllDespachos

    })
    console.log(form.id_pedido = 0)
  }
}
