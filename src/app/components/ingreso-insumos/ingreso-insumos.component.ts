import { Component, OnInit } from '@angular/core';
import { ModelInsumosI } from 'src/app/modelos/modelos.ingreso_insumos';
import { IngresoInsumosService } from 'src/app/servicios/ingreso_insumos/ingreso-insumos.service';

@Component({
  selector: 'app-ingreso-insumos',
  templateUrl: './ingreso-insumos.component.html',
  styleUrls: ['./ingreso-insumos.component.scss']
})
export class IngresoInsumosComponent implements OnInit {

  insumos: ModelInsumosI[] = [];

  constructor(private insumosService: IngresoInsumosService) { }

  ngOnInit(): void {
    this.showAllInsumos();
  }
  showAllInsumos() {
    this.insumosService.getAllInsumos().subscribe(
      (insumos: any) => {
        this.insumos = insumos
        console.log(this.insumos)
      },
      (error) => console.log(error)
    );
  }

}
