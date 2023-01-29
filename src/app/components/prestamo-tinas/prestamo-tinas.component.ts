import { Component, OnInit } from '@angular/core';
import { ModelTinasI } from 'src/app/modelos/modelo.prestamo_tinas';
import { PrestamoTinasService } from 'src/app/servicios/prestamo_tinas/prestamo-tinas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientesService } from '../../servicios/clientes/clientes.service';
import { ModelClientesI } from '../../modelos/modelo.clientes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prestamo-tinas',
  templateUrl: './prestamo-tinas.component.html',
  styleUrls: ['./prestamo-tinas.component.scss']
})
export class PrestamoTinasComponent implements OnInit {

  prestamoTinas: ModelTinasI[] = [];
  clientes: ModelClientesI[] = [];
  fecha: "2000-03-20" | undefined;

  get fecha_entrega() { return this.formPrestamoTinas.get('fecha_entrega'); }
  get numero_tinas() { return this.formPrestamoTinas.get('numero_tinas'); }
  get numero_acta() { return this.formPrestamoTinas.get('numero_acta'); }
  get fk_tbl_cliente_cedula() { return this.formPrestamoTinas.get('fk_tbl_cliente_cedula'); }

  formPrestamoTinas = new FormGroup({
    id_prestamo_tinas: new FormControl(''),
    fecha_prestamo: new FormControl(new Date),
    fecha_entrega: new FormControl('', [Validators.required]),
    numero_tinas: new FormControl('', [Validators.required]),
    numero_acta: new FormControl('', [Validators.required]),
    observasiones: new FormControl(''),
    fk_tbl_cliente_cedula: new FormControl('', [Validators.required]),

  })


  constructor(private prestamoTinasService: PrestamoTinasService,
    private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.showAllPrestamo();
  }

  showAllPrestamo() {
    this.prestamoTinasService.getAllPrestamos().subscribe(
      (prestamoTinas: any) => {
        this.prestamoTinas = prestamoTinas
        console.log(this.prestamoTinas)
      },
      (error) => console.log(error)
    );
  }
  getDataPrestamos(id_prestamo_tinas: any,
    fecha_prestamo: any, fecha_entrega:
      any, numero_tinas: any, observaciones:
      any, numero_acta: any, cliente: any) {
    this.formPrestamoTinas.patchValue({
      id_prestamo_tinas: id_prestamo_tinas,
      fecha_prestamo: fecha_prestamo,
      fecha_entrega: fecha_entrega,
      numero_tinas: numero_tinas,

      observasiones: observaciones,
      numero_acta: numero_acta,
      fk_tbl_cliente_cedula: null,

    })
    // console.log("Imprimiendo ", this.formDespacho)

    this.showAllClients();
    // this.showAllGuards();
  }
  showAllClients() {
    this.clientesService.getAllClients().subscribe(
      (clientes: any) => {
        this.clientes = clientes

      },
      (error) => console.log(error)
    );
  }
  updatePrestamos(form: any) {
    if (this.formPrestamoTinas.valid) {
      this.prestamoTinasService.updatePrestamos(form).subscribe(data => {
        this.showModalMore('center', 'success', 'Prestamo actualizado correctamente', false, 1500);

        this.showAllPrestamo()

      })
    } else {
      this.ShowModal('Prestamo', 'Error al actualizar prestamos', 'error');

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
