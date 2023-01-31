import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      nombre_usuario: [''],
      clave_usuario: ['', Validators.required],
      tipo_usuario: ['']
    })
  }
  login() {
    this.http.get<any>("https://app-sistemas-inventarios.herokuapp.com/usuarios")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.nombre_usuario === this.loginForm.value.nombre_usuario && a.clave_usuario === this.loginForm.value.clave_usuario
        });

        if (user) {
          this.showModalMore('center', 'success', 'Bienvenido', false, 1500);

          this.router.navigate(["dashboard/homeA"])
        } else {
          this.ShowModal('Inicio de sesión', 'Usuario no encontrado', 'error');

        }
      }, err => {
        alert("Something went wrong")
      })
  }

  ShowModal(title: any, infor: any, tipo: any) {
    Swal.fire(title, infor, tipo);
  }
  showModalMore(position: any, icon: any, title: any, showConfirmButton: any, timer: any) {
    Swal.fire({
      position: position,
      icon: icon,
      title: title,
      showConfirmButton: showConfirmButton,
      timer: timer
    });
  }

}