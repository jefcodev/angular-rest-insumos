import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { RecicladasComponent } from '../../recicladas.component';
import { RecicladasService } from '../../../../servicios/recicladas/recicladas.service';
import { Router } from '@angular/router';
import { ModelAutoridadesI } from '../../../../modelos/modelo.autoridades';
import { AutoridadesService } from '../../../../servicios/autoridades/autoridades.service';

@Component({
  selector: 'app-comrecicladas',
  templateUrl: './comrecicladas.component.html',
  styleUrls: ['./comrecicladas.component.scss']
})
export class ComrecicladasComponent implements OnInit {
  autoridades: ModelAutoridadesI[] = [];


  formRecicladas = new FormGroup({
    fecha: new FormControl(),
    numero_acta: new FormControl(''),
    cantidad: new FormControl(''),
    observasion: new FormControl(''),
    fk_tbl_autoridades_id: new FormControl(1)
  })

  constructor(private autoridadesServices: AutoridadesService,
    private recicladasServices: RecicladasService, private recicladasComponent: RecicladasComponent,
    private router: Router) { }

  ngOnInit(): void {
    this.showAllAutoridades();
  }



  showAllAutoridades() {
    this.autoridadesServices.getAllAutoridades().subscribe(
      (autoridades: any) => {
        this.autoridades = autoridades
        // this.showModalMore('center', 'success', 'Despacho registrado exitosamente', false, 2000);
      },
      (error) => console.log(error)
      // this.ShowModal('Pedido', 'Error al registrar pedido', 'error');

    );
  }

  createRecicladas(form: any) {
    console.log(form)
    this.recicladasServices.saveRecicladas(form).subscribe(data => {
      this.router.navigateByUrl("/dashboard/recicladas");
      this.recicladasComponent.showAllRecicladas();
    })
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
