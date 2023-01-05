import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DespachosService {
  url: string = 'http://localhost:4000/';
  constructor(private http: HttpClient) { }

  getAllDespachos(){
    let direccion=this.url+"despachos";
    return this.http.get(direccion);
  }
}
