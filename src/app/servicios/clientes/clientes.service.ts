import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url:string='https://app-sistemas-inventarios.herokuapp.com/';
  // constructor(private http:HttpClient) { }

  // url:string='http://localhost:4000/';
  constructor(private http:HttpClient) { }

  getAllClients(){
    let direccion=this.url+"clientes";
    return this.http.get(direccion);
  }

  saveClient(form:any){
    let direccion=this.url+"clientes";
    return this.http.post(direccion,form);
  }
  updateClient(form:any){
    let direccion=this.url+"clientes";
    return this.http.put(direccion,form);
  }
}
