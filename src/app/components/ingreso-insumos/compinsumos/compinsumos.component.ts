import { Component, OnInit } from '@angular/core';
import { ModelGuardiasI } from 'src/app/modelos/modelo.guardias';
import { GuardiasService } from 'src/app/servicios/guardias/guardias.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngresoInsumosService } from '../../../servicios/ingreso_insumos/ingreso-insumos.service';
import { Router } from '@angular/router';
import { IngresoInsumosComponent } from '../ingreso-insumos.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compinsumos',
  templateUrl: './compinsumos.component.html',
  styleUrls: ['./compinsumos.component.scss']
})
export class CompinsumosComponent implements OnInit {

  guardias: ModelGuardiasI[] = [];

  get fecha_salida() { return this.formInsumo.get('fecha_salida'); }
  get cantidad_libras() { return this.formInsumo.get('cantidad_libras'); }
  get fk_tbl_guardia_cedula() { return this.formInsumo.get('fk_tbl_guardia_cedula'); }

  formInsumo = new FormGroup({
    fecha_ingreso: new FormControl(new Date),
    fecha_salida: new FormControl('', [Validators.required]),
    cantidad_libras: new FormControl('', [Validators.required]),
    observasiones: new FormControl(''),
    fk_tbl_guardia_cedula: new FormControl('', [Validators.required])
  })

  constructor(private guardiasservices: GuardiasService, private router: Router, private insumoServices: IngresoInsumosService,
    private ingresoInsumosComponent: IngresoInsumosComponent) { }


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
    if (this.formInsumo.valid) {
      this.insumoServices.saveInsumos(form).subscribe(data => {
        this.router.navigateByUrl("/dashboard/insumo");
        this.ingresoInsumosComponent.showAllInsumos();
        this.showModalMore('center', 'success', 'Insumo registrado exitosamente', false, 2000);

      })
    } else {
      this.ShowModal('Insumo', 'Error al registrar insumo', 'error');
      this.router.navigateByUrl("/dashboard/insumo");
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

}
