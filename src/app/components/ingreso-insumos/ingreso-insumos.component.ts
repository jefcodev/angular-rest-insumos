import { Component, OnInit } from '@angular/core';
import { ModelInsumosI } from 'src/app/modelos/modelos.ingreso_insumos';
import { IngresoInsumosService } from 'src/app/servicios/ingreso_insumos/ingreso-insumos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GuardiasService } from '../../servicios/guardias/guardias.service';
import { ModelGuardiasI } from '../../modelos/modelo.guardias';

@Component({
  selector: 'app-ingreso-insumos',
  templateUrl: './ingreso-insumos.component.html',
  styleUrls: ['./ingreso-insumos.component.scss']
})
export class IngresoInsumosComponent implements OnInit {
  guardias: ModelGuardiasI[] = [];
  insumos: ModelInsumosI[] = [];
  fecha_ingreso: "2000-03-20" | undefined;
  fecha_salida: "2000-03-20" | undefined;
  formEditInsumo = new FormGroup({
    id_insumos: new FormControl(''),
    fecha_ingreso: new FormControl(new Date),
    fecha_salida: new FormControl(''),
    cantidad_libras: new FormControl(''),
    observasiones: new FormControl(''),
    fk_tbl_guardia_cedula: new FormControl('')
  })
  constructor(private guardiaService: GuardiasService, private insumosService: IngresoInsumosService) { }

  ngOnInit(): void {
    this.showAllInsumos();
  }
  showAllInsumos() {
    this.insumosService.getAllInsumos().subscribe(
      (insumos: any) => {
        this.insumos = insumos
        console.log(this.insumos)
      },
      (error) => console.log(error)
    );
  }

  getDataInsumo(id_insumos: any, fecha_ingreso: any, fecha_salida:
    any, cantidad_libras: any, observasiones: any, fk_tbl_guardia_cedula: any) {
    this.formEditInsumo.setValue({
      id_insumos: id_insumos,
      fecha_ingreso: fecha_ingreso,
      fecha_salida: fecha_salida,
      cantidad_libras: cantidad_libras,
      observasiones: observasiones,
      fk_tbl_guardia_cedula: fk_tbl_guardia_cedula
    })
    this.showAllGuards()

  }

  updateInsumos(form: any) {
    console.log(form)
    this.insumosService.updateInsumos(form).subscribe(data => {
      //   this.showAllRecicladas()

    })

  }

  showAllGuards() {
    this.guardiaService.getAllGuards().subscribe(
      (guardias: any) => {
        this.guardias = guardias
        console.log(this.guardias)
      },
      (error) => console.log(error)
    );
  }
}
