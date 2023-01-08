import { Component, OnInit } from '@angular/core';
import { ModelGuardiasI } from 'src/app/modelos/modelo.guardias';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GuardiasService } from 'src/app/servicios/guardias/guardias.service';


@Component({
  selector: 'app-guardias',
  templateUrl: './guardias.component.html',
  styleUrls: ['./guardias.component.scss']
})
export class GuardiasComponent implements OnInit {

  guardias: ModelGuardiasI[] = [];
  nGuardiaForm = new FormGroup({
    cedula: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    observaciones: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)])
  });
  cedulaAux: string = '';

  nGuardiaFormA = new FormGroup({
    cedula: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    telefono: new FormControl(''),
    observaciones: new FormControl('')
  });

  constructor(private guardiaService: GuardiasService) { }

  ngOnInit(): void {
    this.showAllGuards();
  }
  showAllGuards() {
    this.guardiaService.getAllGuards().subscribe(
      (guardias: any) => {
        this.guardias = guardias
        console.log(this.guardias)
      },
      (error) => console.log(error)
    );
  }


  public crearGuards(form: any) {
    this.guardiaService.saveGuards(form).subscribe(data => {
      this.showAllGuards();
      this.guardsForm();

    })
  }

  public guardsForm() {
    this.nGuardiaForm.patchValue({
      cedula: '',
      nombre: '',
      apellido: '',
      telefono: '',
      observaciones: ''
    });
  }


  public getDataGuards(cedula: any, nombre: any, apellido: any, observaciones: any, telefono: any) {
    this.nGuardiaFormA.patchValue({
      cedula: cedula,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      observaciones: observaciones

    })
    this.cedulaAux = cedula;
    console.log(cedula)
  }

  public updateGuards(form: any) {
    this.guardiaService.updateGuards(form).subscribe(data => {
      this.showAllGuards();
    })
  }

  get cedula() { return this.nGuardiaForm.get('cedula'); }
  get nombre() { return this.nGuardiaForm.get('nombre'); }
  get apellido() { return this.nGuardiaForm.get('apellido'); }
  get telefono() { return this.nGuardiaForm.get('telefono'); }
  get observaciones() { return this.nGuardiaForm.get('observaciones'); }
}

