import { Component, OnInit } from '@angular/core';
import { ModelClientesI } from 'src/app/modelos/modelo.clientes';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientesService } from '../../servicios/clientes/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: ModelClientesI[] = [];
  nClienteForm = new FormGroup({
    cedula: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    ciudad: new FormControl(''),
    telefono: new FormControl('')
  }
  );
  cedulaAux: string = '';
  nClienteFormA = new FormGroup({
    cedula: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    ciudad: new FormControl(''),
    telefono: new FormControl('')
  }
  );

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.showAllClients();

  }
  showAllClients() {
    this.clientesService.getAllClients().subscribe(
      (clientes: any) => {
        this.clientes = clientes
        console.log(this.clientes)
      },
      (error) => console.log(error)
    );
  }
  public crearClient(form: any) {
    this.clientesService.saveClient(form).subscribe(data => {
      this.showAllClients();
      this.cleanForm();

    })
  }

  public cleanForm() {
    this.nClienteForm.patchValue({
      cedula: '',
      nombre: '',
      apellido: '',
      ciudad: '',
      telefono: ''
    })


  }
  public getDataClient(cedula: any, nombre: any, apellido: any, ciudad: any, telefono: any) {
    this.nClienteFormA.patchValue({
      cedula: cedula,
      nombre: nombre,
      apellido: apellido,
      ciudad: ciudad,
      telefono: telefono
    })
    this.cedulaAux=cedula;
    console.log(cedula)
  }

  public updateClient(form: any) {
    this.clientesService.updateClient(form).subscribe(data => {
      this.showAllClients();
    })
  }
}
