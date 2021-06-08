import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modulos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-registro-usuarios-admin',
  templateUrl: './registro-usuarios-admin.component.html',
  styleUrls: ['./registro-usuarios-admin.component.css']
})
export class RegistroUsuariosAdminComponent implements OnInit {

  nombre:string="";
  apellido:string="";
  pais:string="";
  ciudad:string="";
  usuario:string="";
  contrasena:string="";

  constructor(private servicio:UsuariosService) { }

  ngOnInit(): void {
  }

  ingresarUsuario()
  {
    let usuarioactual:Usuario = {
      nombre:this.nombre,
      apellido:this.apellido,
      pais:this.pais,
      ciudad:this.ciudad,
      usuario:this.usuario,
      contrasena:this.contrasena
    }
    this.servicio.crearUsuario(usuarioactual).subscribe();
  }


}
