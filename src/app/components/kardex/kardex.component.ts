import { Component, OnInit } from '@angular/core';
import { ModelKardexI } from '../../modelos/modelo.kardex';
import { KardexService } from '../../servicios/kardex/kardex.service';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {
  kardex: ModelKardexI[] = [];
  constructor(private dexServices: KardexService) { }

  ngOnInit(): void {
    this.showAllkadex();
  }

  showAllkadex() {
    this.dexServices.getAllBitacora().subscribe(
      (kardex: any) => {
        this.kardex = kardex

      },
      (error) => console.log(error)
    );
  }
}
