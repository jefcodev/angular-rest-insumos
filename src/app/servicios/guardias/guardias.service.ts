import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuardiasService {
  url: string = 'http://localhost:4000/';
  constructor(private http: HttpClient) { }

  getAllGuards(){
    let direccion=this.url+"guardias";
    return this.http.get(direccion);
  }
  saveGuards(form:any){
    let direccion=this.url+"guardias";
    return this.http.post(direccion,form);
  }
  updateGuards(form:any){
    let direccion=this.url+"guardias";
    return this.http.put(direccion,form);
  }
}
