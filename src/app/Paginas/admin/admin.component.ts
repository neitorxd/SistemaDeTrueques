import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modulos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usuarios:Usuario[] =[];
  usuariobloqueado:Usuario ={"nombre":"","apellido":"","ciudad":"","pais":"","usuario":"","contrasena":""}
  ideliminar:number=0;

  constructor(private service:UsuariosService) { }

  ngOnInit(): void {
    this.hola();
  }

  hola()
  {
    this.service.obtenerUsuarios().subscribe(servicio=>{
      this.usuarios=servicio;
      console.log(this.usuarios);
    });
  }

  eliminar()
  {
    let ideliminado = this.ideliminar;
    this.service.eliminarUsuario(ideliminado).subscribe();
    this.refreshear();
  }

  refreshear()
  {
    window.location.reload();
  }
}
