import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecicladasService {

 url: string = 'https://app-sistemas-inventarios.herokuapp.com/';
// //  url: string = 'http://localhost:4000/';
  constructor(private http: HttpClient) { }

  getAllRecicladas() {
    let direccion = this.url + "recicladas";
    return this.http.get(direccion);
  }
  saveRecicladas(form: any) {
    let direccion = this.url + "recicladas";
    return this.http.post(direccion, form);
  }
  updateRecicladas
  (form: any) {
    let direccion = this.url + "recicladas";
    return this.http.put(direccion, form);
  }
}