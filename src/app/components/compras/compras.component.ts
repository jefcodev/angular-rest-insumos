import { Component, OnInit } from '@angular/core';
import { ModelComprasI } from 'src/app/modelos/modelo.compras';
import { ComprasService } from 'src/app/servicios/compras/compras.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModelAutoridadesI } from '../../modelos/modelo.autoridades';
import { AutoridadesService } from '../../servicios/autoridades/autoridades.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
  compras: ModelComprasI[] = [];
  autoridades: ModelAutoridadesI[] = [];

  constructor(private comprasServices: ComprasService, private autoridadesServices: AutoridadesService) { }

  formEditCompras = new FormGroup({
    id_compras: new FormControl(''),
    fecha: new FormControl(new Date),
    numero_acta: new FormControl(''),
    cantidad: new FormControl(''),
    observacion: new FormControl(''),
    fk_tbl_autoridades_id: new FormControl('')
  });
  fecha: "2000-03-20" | undefined;



  ngOnInit(): void {
    this.showAllCompras()
  }

  showAllAutoridades() {
    this.autoridadesServices.getAllAutoridades().subscribe(
      (autoridades: any) => {
        this.autoridades = autoridades
        console.log(this.autoridades)
      },
      (error) => console.log(error)
    );
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


  getDataCompras(id_compras: any, fecha: any, numero_acta:
    any, cantidad: any, observacion: any, autoridad: any) {
    this.formEditCompras.patchValue({
      id_compras: id_compras,
      fecha: fecha,
      numero_acta: numero_acta,
      cantidad: cantidad,
      observacion: observacion,
      fk_tbl_autoridades_id: autoridad
    })
    console.log("Imprimiendo ", this.formEditCompras.value)

    this.showAllAutoridades();
  }

  updateCompras(form: any) {
    this.comprasServices.updateCompras(form).subscribe(data => {
      // this.showAllOrders()
    
    })
    // console.log(form.id_pedido=0)
  }
}
