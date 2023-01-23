import { Component, OnInit } from '@angular/core';
import { AutoridadesService } from '../../../servicios/autoridades/autoridades.service';
import { ModelAutoridadesI } from '../../../modelos/modelo.autoridades';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ComprasService } from '../../../servicios/compras/compras.service';

@Component({
  selector: 'app-compcompra',
  templateUrl: './compcompra.component.html',
  styleUrls: ['./compcompra.component.scss']
})
export class CompcompraComponent implements OnInit {

  autoridades: ModelAutoridadesI[] = [];

  formCompra = new FormGroup({
    fecha: new FormControl(''),
    numero_acta: new FormControl(''),
    cantidad: new FormControl(''),
    observacion: new FormControl(''),
    fk_tbl_autoridades_id: new FormControl(''),


  });

  constructor(private autoridadesServices: AutoridadesService, private comprasServices:ComprasService) { }

  ngOnInit(): void {
    this.showAllAutoridades();
  }


  showAllAutoridades() {
    this.autoridadesServices.getAllAutoridades().subscribe(
      (autoridades: any) => {
        this.autoridades = autoridades
        console.log(this.autoridades)
      },
      (error) => console.log(error)
    );
  }

  createCompra(form: any) {
    // if (this.formPedido.valid) {
      this.comprasServices.saveCompras(form).subscribe(data => {
        // this.router.navigateByUrl("/dashboard/pedido");
        // this.pedidosComponent.showAllOrders();
        this.showModalMore('center', 'success', 'Compra registrado exitosamente', false, 2000);
      })
    // } else {
    //   this.ShowModal('Pedido', 'Error al registrar pedido', 'error');
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

}
