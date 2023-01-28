import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(private cd: ChangeDetectorRef, private comprasServices: ComprasService, private autoridadesServices: AutoridadesService) { }

  formEditCompras = new FormGroup({
    id_compras: new FormControl(''),
    fecha: new FormControl(''),
    numero_acta: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    cantidad: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    observacion: new FormControl(''),
    fk_tbl_autoridades_id: new FormControl('', [Validators.required]),

  });
  fe!: Date;

  fechasx: Date = new Date;
  public f: Date = new Date;




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
      fecha: new Date,
      numero_acta: numero_acta,
      cantidad: cantidad,
      observacion: observacion,
      fk_tbl_autoridades_id: autoridad

    })
    // setTimeout(() => {
    //   this.fe = fecha;
    // }, 0);
    Promise.resolve().then(() => {
      this.fe = fecha;
    })
    this.cd.detectChanges();

    console.log("Imprimiendo ", this.formEditCompras.value)

    this.showAllAutoridades();
  }

  updateCompras(form: any) {

    this.comprasServices.updateCompras(form).subscribe(data => {
      // this.showAllOrders()

    })
    this.cd.detectChanges();
    // console.log(form.id_pedido=0)
  }

  get fechas() { return this.formEditCompras.get('fecha'); }
  get numero_actaa() { return this.formEditCompras.get('numero_acta'); }
  get cantidadd() { return this.formEditCompras.get('cantidad'); }
  // get observacion() { return this.formCompra.get('observacion'); }
  get fk_tbl_autoridades_idd() { return this.formEditCompras.get('fk_tbl_autoridades_id'); }


}
