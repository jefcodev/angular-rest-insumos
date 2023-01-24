import { Component, OnInit } from '@angular/core';
import { ModelRecicladasI } from '../../modelos/modelo.recicladas';
import { RecicladasService } from '../../servicios/recicladas/recicladas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModelGuardiasI } from '../../modelos/modelo.guardias';
import { GuardiasService } from '../../servicios/guardias/guardias.service';
import { AutoridadesService } from '../../servicios/autoridades/autoridades.service';
import { ModelAutoridadesI } from '../../modelos/modelo.autoridades';

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
      fk_tbl_autoridades_id: guardia
    })
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
    console.log(form)
    // this.recicladasServices.updateRecicladas(form).subscribe(data => {
    //   this.showAllRecicladas()

    // })

  }
}
