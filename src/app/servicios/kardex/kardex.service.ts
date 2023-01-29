import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class KardexService {

  url: string = 'https://app-sistemas-inventarios.herokuapp.com/';
  // url: string = 'http://localhost:4000/'; 
  constructor(private http: HttpClient) { }

  getAllBitacora() {
    let direccion = this.url + "bitacora";
    return this.http.get(direccion);
  }

  saveBitacora(form: any) {
    // console.log(form)
    // console.log("haciendo ")
    let direccion = this.url + "bitacora";
    return this.http.post(direccion, form);
  }


}
