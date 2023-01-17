import { Component, OnInit } from '@angular/core';
import { ModelRecicladasI } from '../../modelos/modelo.recicladas';
import { RecicladasService } from '../../servicios/recicladas/recicladas.service';

@Component({
  selector: 'app-recicladas',
  templateUrl: './recicladas.component.html',
  styleUrls: ['./recicladas.component.scss']
})
export class RecicladasComponent implements OnInit {
  recicladas: ModelRecicladasI[] = [];

  constructor(private recicladasServices: RecicladasService) { }

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
}
