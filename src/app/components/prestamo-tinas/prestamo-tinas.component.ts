import { Component, OnInit } from '@angular/core';
import { ModelTinasI } from 'src/app/modelos/modelo.prestamo_tinas';
import { PrestamoTinasService } from 'src/app/servicios/prestamo_tinas/prestamo-tinas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientesService } from '../../servicios/clientes/clientes.service';
import { ModelClientesI } from '../../modelos/modelo.clientes';

@Component({
  selector: 'app-prestamo-tinas',
  templateUrl: './prestamo-tinas.component.html',
  styleUrls: ['./prestamo-tinas.component.scss']
})
export class PrestamoTinasComponent implements OnInit {

  prestamoTinas: ModelTinasI[] = [];
  clientes: ModelClientesI[] = [];
  fecha: "2000-03-20" | undefined;


  formPrestamoTinas = new FormGroup({
    id_prestamo_tinas: new FormControl(''),
    fecha_prestamo: new FormControl(new Date),
    fecha_entrega: new FormControl(''),
    numero_tinas: new FormControl(''),
    numero_acta: new FormControl(''),
    observasiones: new FormControl(''),
    fk_tbl_cliente_cedula: new FormControl('')
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
      fk_tbl_cliente_cedula: cliente,

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
    this.prestamoTinasService.updatePrestamos(form).subscribe(data => {
      this.showAllPrestamo()

    })
    console.log(form.id_pedido = 0)
  }
}
