import { Component, OnInit } from '@angular/core';
import { ModelGuardiasI } from 'src/app/modelos/modelo.guardias';
import { GuardiasService } from 'src/app/servicios/guardias/guardias.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngresoInsumosService } from '../../../servicios/ingreso_insumos/ingreso-insumos.service';

@Component({
  selector: 'app-compinsumos',
  templateUrl: './compinsumos.component.html',
  styleUrls: ['./compinsumos.component.scss']
})
export class CompinsumosComponent implements OnInit {

  guardias: ModelGuardiasI[] = [];

  formInsumo = new FormGroup({
    fecha_ingreso: new FormControl(new Date),
    fecha_salida: new FormControl(''),
    cantidad_libras: new FormControl(''),
    observasiones: new FormControl(''),
    fk_tbl_guardia_cedula: new FormControl('')
  })

  constructor(private guardiasservices: GuardiasService, private insumoServices: IngresoInsumosService) { }


  ngOnInit(): void {
    this.showAllGuards();

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

  createInsumo(form: any) {
    this.insumoServices.saveInsumos(form).subscribe(data => {
      // this.router.navigateByUrl("/dashboard/pedido");
      // this.pedidosComponent.showAllOrders();

    })
  }

}
