import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrestamoTinasService {
  url: string = 'https://app-sistemas-inventarios.herokuapp.com/';
  // url: string = 'http://localhost:4000/'; 
  constructor(private http: HttpClient) { }


  getAllPrestamos() {
    let direccion = this.url + "prestamos";
    return this.http.get(direccion);
  }

  savePrestamos(form: any) {
    let direccion = this.url + "prestamos";
    return this.http.post(direccion, form);
  }
}
