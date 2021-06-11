import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modulos/usuario';
import { Producto } from '../modulos/producto';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  obtenerUsuarios()
  {
    return this.http.get<Usuario[]>("http://localhost:3000/usuarios");
  }
  obtenerUsuarioPorId(id:number)
  {
    return this.http.get<Usuario>("http://localhost:3000/usuarios/" + id);
  }

  eliminarUsuario(id:number)
  {
    return this.http.delete("http://localhost:3000/usuarios/" + id);
  }

  crearUsuario(usuario:Usuario)
  {
    return this.http.post<Usuario>("http://localhost:3000/usuarios/",usuario);
  }

  editarUsuario(usuario:Usuario)
  {
    return this.http.put("http://localhost:3000/usuarios/" +usuario.id, usuario);
  }
}
