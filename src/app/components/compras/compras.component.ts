import { Component, OnInit } from '@angular/core';
import { ModelComprasI } from 'src/app/modelos/modelo.compras';
import { ComprasService } from 'src/app/servicios/compras/compras.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
  compras:ModelComprasI[] = [];

  constructor( private comprasServices:ComprasService) { }

  ngOnInit(): void {
    this.showAllCompras()
  }
  showAllCompras() {
    this.comprasServices.getAllCompras().subscribe(
      (compras: any) => {
        this.compras = compras
        console.log(this.compras)
      },
      (error) => console.log(error)
    );
  }

}
