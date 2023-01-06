import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IngresoInsumosService {

  url: string = 'https://app-sistemas-inventarios.herokuapp.com/';
  constructor(private http: HttpClient) { }

  getAllInsumos() {
    let direccion = this.url + "insumos";
    return this.http.get(direccion);
  }

  saveInsumos(form: any) {
    let direccion = this.url + "insumos";
    return this.http.post(direccion, form);
  }

}
