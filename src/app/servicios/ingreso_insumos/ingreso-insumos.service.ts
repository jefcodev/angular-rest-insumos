import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IngresoInsumosService {

  url: string = 'http://localhost:4000/';
  constructor(private http: HttpClient) { }

  getAllInsumos(){
    let direccion=this.url+"insumos";
    return this.http.get(direccion);
  }

  
}
