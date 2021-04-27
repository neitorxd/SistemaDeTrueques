import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  nombredeusuario:String = "Nombre de usuario"
  Nombreyapellido:String = "John Doe"
  Direccion:String = "Avenida siempre viva 107"
  Numerodeventas:Number = 0

  constructor() {
    this.Numerodeventas = 123;
   }

  ngOnInit(): void {
  }

}
