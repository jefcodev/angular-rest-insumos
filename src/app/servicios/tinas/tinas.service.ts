import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TinasService {

  url: string = 'https://app-sistemas-inventarios.herokuapp.com/';
  // constructor(private http:HttpClient) { }

  // url:string='http://localhost:4000/';
  constructor(private http: HttpClient) { }

  getAllTinas() {
    let direccion = this.url + "tinas";
    return this.http.get(direccion);
  }
  saveTinas(form: any) {
    let direccion = this.url + "tinas";
    return this.http.post(direccion, form);
  }
  updateTinas(form: any) {
    let direccion = this.url + "tinas";
    return this.http.put(direccion, form);
  }
}