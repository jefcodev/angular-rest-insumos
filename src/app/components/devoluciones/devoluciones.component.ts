import { Component, OnInit } from '@angular/core';
import { ModelDevolucionesI } from '../../modelos/modelo.devoluciones';
import { DevolucionesService } from '../../servicios/devoluciones/devoluciones.service';


@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.scss']
})
export class DevolucionesComponent implements OnInit {

  constructor(private devolucionesServices: DevolucionesService) { }
  devoluciones: ModelDevolucionesI[] = [];
  ngOnInit(): void {
    this.showAllCompras()
  }
  showAllCompras() {
    this.devolucionesServices.getAllDevoluciones().subscribe(
      (devoluciones: any) => {
        this.devoluciones = devoluciones
        console.log(this.devoluciones)
      },
      (error) => console.log(error)
    );
  }

}
