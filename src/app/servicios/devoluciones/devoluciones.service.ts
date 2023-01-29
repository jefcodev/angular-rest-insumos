import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DevolucionesService {

 url: string = 'https://app-sistemas-inventarios.herokuapp.com/';
//  url: string = 'http://localhost:4000/';
  constructor(private http: HttpClient) { }

  getAllDevoluciones() {
    let direccion = this.url + "devoluciones";
    return this.http.get(direccion);
  }

  saveDevoluciones(form: any) {
    let direccion = this.url + "devoluciones";
    return this.http.post(direccion, form);
  }
  updateDevoluciones(form: any) {
    let direccion = this.url + "devoluciones";
    return this.http.put(direccion, form);
  }
}
