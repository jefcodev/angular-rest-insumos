import { Component, OnInit } from '@angular/core';
import { ModelTinasI } from 'src/app/modelos/modelo.prestamo_tinas';
import { PrestamoTinasService } from 'src/app/servicios/prestamo_tinas/prestamo-tinas.service';

@Component({
  selector: 'app-prestamo-tinas',
  templateUrl: './prestamo-tinas.component.html',
  styleUrls: ['./prestamo-tinas.component.scss']
})
export class PrestamoTinasComponent implements OnInit {

  prestamoTinas: ModelTinasI[] = [];

  constructor( private prestamoTinasService:PrestamoTinasService) { }

  ngOnInit(): void {
    this.showAllPrestamo();
  }

  showAllPrestamo() {
    this.prestamoTinasService.getAllPrestamos().subscribe(
      (prestamoTinas: any) => {
        this.prestamoTinas = prestamoTinas
        console.log(this.prestamoTinas)
      },
      (error) => console.log(error)
    );
  }
}
