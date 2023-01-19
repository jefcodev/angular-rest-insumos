import { Component, OnInit } from '@angular/core';
import { PrestamoTinasService } from '../../servicios/prestamo_tinas/prestamo-tinas.service';
import { ModelPrestamosHomeI } from '../../modelos/modelo.prestamoshome';
import { TinasService } from '../../servicios/tinas/tinas.service';
import { ModelTinasBI } from '../../modelos/modelo.tinas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prestamosHome: ModelPrestamosHomeI[] = [];
  tinas: ModelTinasBI[] = [];
  stock: number = 0;

  constructor(private prestamosTinasServices: PrestamoTinasService, private tinasServices: TinasService) { }

  ngOnInit(): void {
    this.showAllPrestamosHome()
    this.showAllTinas() 
  }

  showAllPrestamosHome() {
    this.prestamosTinasServices.getAllPrestamoss().subscribe(
      (prestamosHome: any) => {
        this.prestamosHome = prestamosHome
        console.log(this.prestamosHome)
      },
      (error) => console.log(error)
    );
  }

  showAllTinas() {
    this.tinasServices.getAllTinas().subscribe(
      (tinas: any) => {
        this.tinas = tinas
        console.log(tinas)
        console.log(tinas['stock'])
        this.stock=tinas['stock'];
        console.log(this.stock)

      },
      (error) => console.log(error)
    );
  }


}
