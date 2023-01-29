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

  get fecha() { return this.formRecicladas.get('fecha'); }
  get numero_acta() { return this.formRecicladas.get('numero_acta'); }
  get cantidad() { return this.formRecicladas.get('cantidad'); }
  get fk_tbl_autoridades_id() { return this.formRecicladas.get('fk_tbl_autoridades_id'); }


  formRecicladas = new FormGroup({
    fecha: new FormControl('', [Validators.required]),
    numero_acta: new FormControl('', [Validators.required]),
    cantidad: new FormControl('', [Validators.required]),
    observacion: new FormControl(''),
    fk_tbl_autoridades_id: new FormControl('', [Validators.required])
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
      },
      (error) => console.log(error)

    );
  }

  createRecicladas(form: any) {
    if (this.formRecicladas.valid) {
      this.recicladasServices.saveRecicladas(form).subscribe(data => {
        this.router.navigateByUrl("/dashboard/recicladas");
        this.recicladasComponent.showAllRecicladas();
        this.showModalMore('center', 'success', 'Reciclado registrado exitosamente', false, 2000);

      })

    } else {
      this.ShowModal('Reciclado', 'Error al registrar', 'error');
      this.router.navigateByUrl("/dashboard/recicladas");
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
