import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  url: string = 'http://localhost:4000/';
  constructor(private http: HttpClient) { }

  getAllOrders(){
    let direccion=this.url+"pedidos";
    return this.http.get(direccion);
  }

  
  saveOrders(form:any){
    let direccion=this.url+"pedidos";
    return this.http.post(direccion,form);
  }
}
