import { Component, OnInit } from '@angular/core';
import { ModelDevolucionesI } from '../../modelos/modelo.devoluciones';
import { DevolucionesService } from '../../servicios/devoluciones/devoluciones.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrestamoTinasComponent } from '../prestamo-tinas/prestamo-tinas.component';
import { PrestamoTinasService } from '../../servicios/prestamo_tinas/prestamo-tinas.service';
import { ModelTinasI } from '../../modelos/modelo.prestamo_tinas';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.scss']
})
export class DevolucionesComponent implements OnInit {

  fecha: "2000-03-20" | undefined;

  formDevolucion = new FormGroup({
    cantidad: new FormControl(''),
    fecha: new FormControl(new Date),
    observacion: new FormControl(''),
    fk_tbl_prestamo_tinas_id: new FormControl("")

  });

  formDevolucionUpdate = new FormGroup({
    id: new FormControl(''),
    cantidad: new FormControl(''),
    fecha: new FormControl(new Date),
    observacion: new FormControl(''),
    fk_tbl_prestamo_tinas_id: new FormControl("")

  });
  prestamos: ModelTinasI[] = [];

  constructor(private devolucionesServices: DevolucionesService, private prestamoTinasServices: PrestamoTinasService) { }
  devoluciones: ModelDevolucionesI[] = [];
  ngOnInit(): void {
    this.showAllDevoluciones()
    this.showAllPrestamos()
  }
  showAllDevoluciones() {
    this.devolucionesServices.getAllDevoluciones().subscribe(
      (devoluciones: any) => {
        this.devoluciones = devoluciones
        console.log(this.devoluciones)
      },
      (error) => console.log(error)
    );
  }

  showAllPrestamos() {
    this.prestamoTinasServices.getAllPrestamos().subscribe(
      (prestamos: any) => {
        this.prestamos = prestamos
        console.log(this.prestamos)
      },
      (error) => console.log(error)
    );
  }

  public crearDevolucion(form: any) {
    console.log(form)
    // if (this.AutoridadForm.valid) {
    this.devolucionesServices.saveDevoluciones(form).subscribe(data => {
      this.showAllDevoluciones();
      // this.guardsForm();
      // this.showModalMore('center', 'success', 'Autoridad registrado exitosamente', false, 2000);

    })
    // } else {
    //   this.ShowModal('Autoridad', 'Error al registrar autoridad', 'error');
    // }

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

  public getDataDevoluciones(id: any, cantidad: any, observacion: any, fecha: any, fk_tbl_prestamo_tinas_id: any) {
    this.formDevolucionUpdate.patchValue({
      id: id,
      cantidad: cantidad,
      observacion: observacion,
      fecha: fecha,
      fk_tbl_prestamo_tinas_id: 1

    })
    // this.cedulaAux = cedula;
    console.log(id)
  }

  public updateAutoridades(form: any) {
    console.log(form)
    if (this.formDevolucionUpdate.valid) {
      this.devolucionesServices.updateDevoluciones(form).subscribe(data => {
        this.showAllDevoluciones();
        this.showModalMore('center', 'success', 'Devolucion actualizado correctamente', false, 1500);
      })
    } else {
      this.ShowModal('Devolucion', 'Error al actualizar devolucion', 'error');
    }

  }
}
