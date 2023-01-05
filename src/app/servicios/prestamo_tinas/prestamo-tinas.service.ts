import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrestamoTinasService {
  url: string = 'https://app-sistemas-inventarios.herokuapp.com/';
  constructor(private http: HttpClient) { }


  getAllPrestamos(){
    let direccion=this.url+"prestamos";
    return this.http.get(direccion);
  }
}
