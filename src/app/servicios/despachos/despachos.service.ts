import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DespachosService {
  url: string = 'https://app-sistemas-inventarios.herokuapp.com/';
  constructor(private http: HttpClient) { }

  getAllDespachos(){
    let direccion=this.url+"despachos";
    return this.http.get(direccion);
  }
  saveDespacho(form:any){
    let direccion=this.url+"despachos";
    return this.http.post(direccion,form);
  }
}