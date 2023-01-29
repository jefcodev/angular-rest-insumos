import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelClientesI } from 'src/app/modelos/modelo.clientes';
import { PrestamoTinasService } from 'src/app/servicios/prestamo_tinas/prestamo-tinas.service';
import { PrestamoTinasComponent } from '../prestamo-tinas.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-compprestamo',
  templateUrl: './compprestamo.component.html',
  styleUrls: ['./compprestamo.component.scss']
})
export class CompprestamoComponent implements OnInit {

  clientes: ModelClientesI[] = [];

  get fecha_entrega() { return this.formPrestamo.get('fecha_entrega'); }
  get numero_tinas() { return this.formPrestamo.get('numero_tinas'); }
  get numero_acta() { return this.formPrestamo.get('numero_acta'); }
  get fk_tbl_cliente_cedula() { return this.formPrestamo.get('fk_tbl_cliente_cedula'); }



  formPrestamo = new FormGroup({
    fecha_prestamo: new FormControl(new Date),
    fecha_entrega: new FormControl('', [Validators.required]),
    numero_tinas: new FormControl('', [Validators.required]),
    numero_acta: new FormControl('', [Validators.required]),
    observasiones: new FormControl(''),
    fk_tbl_cliente_cedula: new FormControl('', [Validators.required]),
  })

  constructor(private clientesService: ClientesService,
    private prestamoTinasServices: PrestamoTinasService, private router: Router, private prestamoTinasComponent: PrestamoTinasComponent) { }

  ngOnInit(): void {
    this.showAllClients()
  }

  showAllClients() {
    this.clientesService.getAllClients().subscribe(
      (clientes: any) => {
        this.clientes = clientes

      },
      (error) => console.log(error)
    );
  }

  createPrestamo(form: any) {
    if (this.formPrestamo.valid) {
      this.prestamoTinasServices.savePrestamos(form).subscribe(data => {
        this.router.navigateByUrl("/dashboard/prestamo");
        this.showModalMore('center', 'success', 'Prestamo registrado exitosamente', false, 2000);

        this.prestamoTinasComponent.showAllPrestamo()

      })
    } else {
      this.ShowModal('Prestamo', 'Error al registrar prestamo', 'error');

      this.router.navigateByUrl("/dashboard/prestamo");

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
