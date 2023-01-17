import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  url: string = 'https://app-sistemas-inventarios.herokuapp.com/';
  // constructor(private http:HttpClient) { }

  // url:string='http://localhost:4000/';
  constructor(private http: HttpClient) { }

  getAllCompras() {
    let direccion = this.url + "compras";
    return this.http.get(direccion);
  }
  saveCompras(form: any) {
    let direccion = this.url + "compras";
    return this.http.post(direccion, form);
  }
  updateCompras(form: any) {
    let direccion = this.url + "compras";
    return this.http.put(direccion, form);
  }
}