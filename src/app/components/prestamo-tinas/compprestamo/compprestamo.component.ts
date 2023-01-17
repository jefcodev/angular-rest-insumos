import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelClientesI } from 'src/app/modelos/modelo.clientes';
import { PrestamoTinasService } from 'src/app/servicios/prestamo_tinas/prestamo-tinas.service';
import { PrestamoTinasComponent } from '../prestamo-tinas.component';


@Component({
  selector: 'app-compprestamo',
  templateUrl: './compprestamo.component.html',
  styleUrls: ['./compprestamo.component.scss']
})
export class CompprestamoComponent implements OnInit {

  clientes: ModelClientesI[] = [];

  formPrestamo = new FormGroup({
    fecha_prestamo: new FormControl(new Date),
    fecha_entrega: new FormControl(),
    numero_tinas: new FormControl(''),
    numero_acta: new FormControl(''),
    observasiones: new FormControl(''),
    fk_tbl_cliente_cedula: new FormControl(''),
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
    console.log(form)
    this.prestamoTinasServices.savePrestamos(form).subscribe(data => {
      this.router.navigateByUrl("/dashboard/prestamo");
      // this.pedidosComponent.showAllOrders();
      this.prestamoTinasComponent.showAllPrestamo()

    })
  }

}
