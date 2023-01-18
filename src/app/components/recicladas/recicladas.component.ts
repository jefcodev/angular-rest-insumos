import { Component, OnInit } from '@angular/core';
import { ModelRecicladasI } from '../../modelos/modelo.recicladas';
import { RecicladasService } from '../../servicios/recicladas/recicladas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModelGuardiasI } from '../../modelos/modelo.guardias';
import { GuardiasService } from '../../servicios/guardias/guardias.service';

@Component({
  selector: 'app-recicladas',
  templateUrl: './recicladas.component.html',
  styleUrls: ['./recicladas.component.scss']
})
export class RecicladasComponent implements OnInit {
  recicladas: ModelRecicladasI[] = [];

  constructor(private guardiasService: GuardiasService, private recicladasServices: RecicladasService) { }
  formRecicladas = new FormGroup({
    id: new FormControl(),
    fecha: new FormControl(),
    cantidad: new FormControl(''),
    numero_acta: new FormControl(''),
    observasion: new FormControl(''),
    fk_tbl_autoridades_id: new FormControl('')
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
    this.formRecicladas.patchValue({
      id: id,
      fecha: fecha,
      cantidad: cantidad,
      numero_acta: numero_acta,
      observasion: observacion,
      fk_tbl_guardia_cedula: guardia
    })
    this.showAllGuards()
  }

  showAllGuards() {
    this.guardiasService.getAllGuards().subscribe(
      (guardias: any) => {
        this.guardias = guardias

      },
      (error) => console.log(error)
    );
  }
  updateReciclados(form: any) {
    this.recicladasServices.updateRecicladas(form).subscribe(data => {
      this.showAllRecicladas()

    })
    console.log(form.id_pedido = 0)
  }
}
