import { Component, OnInit } from '@angular/core';
import { ModelRecicladasI } from '../../modelos/modelo.recicladas';
import { RecicladasService } from '../../servicios/recicladas/recicladas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModelGuardiasI } from '../../modelos/modelo.guardias';
import { GuardiasService } from '../../servicios/guardias/guardias.service';
import { AutoridadesService } from '../../servicios/autoridades/autoridades.service';
import { ModelAutoridadesI } from '../../modelos/modelo.autoridades';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recicladas',
  templateUrl: './recicladas.component.html',
  styleUrls: ['./recicladas.component.scss']
})
export class RecicladasComponent implements OnInit {
  recicladas: ModelRecicladasI[] = [];
  autoridades: ModelAutoridadesI[] = [];
  fecha: "2000-03-20" | undefined;

  constructor(private autoridadesServices: AutoridadesService, private guardiasService: GuardiasService, private recicladasServices: RecicladasService) { }
  formRecicladas = new FormGroup({
    id: new FormControl(''),
    fecha: new FormControl('', [Validators.required]),
    cantidad: new FormControl('', [Validators.required]),
    numero_acta: new FormControl('', [Validators.required]),
    observasion: new FormControl(''),
    fk_tbl_autoridades_id: new FormControl('', [Validators.required])
  })



  guardias: ModelGuardiasI[] = [];


  ngOnInit(): void {
    this.showAllRecicladas()
  }
  showAllRecicladas() {
    this.recicladasServices.getAllRecicladas().subscribe(
      (recicladas: any) => {
        this.recicladas = recicladas
        console.log(this.recicladas)
      },
      (error) => console.log(error)
    );
  }

  getDataReciclados(id: any, fecha: any, cantidad:
    any, numero_acta: any, observacion: any, guardia: any) {
    this.formRecicladas.setValue({
      id: id,
      fecha: fecha,
      cantidad: cantidad,
      numero_acta: numero_acta,
      observasion: observacion,
      fk_tbl_autoridades_id: null
    })
    console.log(this.formRecicladas)
    this.showAllAutoridades()

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


  updateReciclados(form: any) {
    if (this.formRecicladas.valid) {
      this.recicladasServices.updateRecicladas(form).subscribe(data => {
        this.showModalMore('center', 'success', 'Reciclado actualizada correctamente', false, 1500);

        this.showAllRecicladas()

      })
    } else {
      this.ShowModal('Reciclados', 'Error al actualizar', 'error');

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
  get fechau() { return this.formRecicladas.get('fecha'); }
  get numero_acta() { return this.formRecicladas.get('numero_acta'); }
  get cantidad() { return this.formRecicladas.get('cantidad'); }
  get fk_tbl_autoridades_id() { return this.formRecicladas.get('fk_tbl_autoridades_id'); }

}
