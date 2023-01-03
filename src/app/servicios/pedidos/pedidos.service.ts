import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  url: string = 'https://app-sistemas-inventarios.herokuapp.com/';
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
