import { Component, OnInit } from '@angular/core';
import { ModelDespachoI } from 'src/app/modelos/modelo.despachos';
import { DespachosService } from 'src/app/servicios/despachos/despachos.service';

@Component({
  selector: 'app-despachos',
  templateUrl: './despachos.component.html',
  styleUrls: ['./despachos.component.scss']
})
export class DespachosComponent implements OnInit {

  despachos: ModelDespachoI[] = [];

  constructor(private despachoServicio:DespachosService) { }

  ngOnInit(): void {
    this.showAllDespachos();
  }

  showAllDespachos() {
    this.despachoServicio.getAllDespachos().subscribe(
      (despachos: any) => {
        this.despachos = despachos
        console.log(this.despachos)
      },
      (error) => console.log(error)
    );
  }

}
