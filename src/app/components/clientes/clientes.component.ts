import { Component, OnInit } from '@angular/core';
import {ModelClientesI} from 'src/app/modelos/modelo.clientes';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ClientesService } from '../../servicios/clientes/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: ModelClientesI [] = [];  

  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
    this.showAllClients();
    
  }
  showAllClients(){
    this.clientesService.getAllClients().subscribe(
      (clientes:any)=>{
        this.clientes=clientes
        console.log(this.clientes)
      },
      (error)=>console.log(error)
    );
  }

}
