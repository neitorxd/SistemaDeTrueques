import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router,ActivatedRoute} from '@angular/router'
import { Usuario } from '../modulos/usuario';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string="";
  password:string="";
  usuario:Usuario|null=null;
  listausuarios:Usuario[]=[];
  idSeleccionada:any=0;

  constructor(private servicios:UsuariosService,private router:Router) {
    $("#login-button").click(function(event){
      event.preventDefault();
    
    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
 });
  }
  
  llenarUsuarios()
  {
    this.servicios.obtenerUsuarios().subscribe(lista=>{
      this.listausuarios=lista;
      console.log(lista);
    });
  }

  buscar()
  {
    if(this.listausuarios.find(x => x.usuario === this.user) === undefined)
    {
      alert("Usuario No Registrado");
    }
    else
    {
      const usuarioSeleccionado = this.listausuarios.find(x => x.usuario === this.user);
      this.idSeleccionada= usuarioSeleccionado?.id;
      if(usuarioSeleccionado?.usuario === this.user)
      {
        if(usuarioSeleccionado.contrasena === this.password)
        {
          if(usuarioSeleccionado.esadmin === true)
          {
            this.router.navigate(['admin']);
          }
          else
          {
            this.router.navigate(['landingpage/'+ this.idSeleccionada]);
          }
        }
        else
        {
          alert("Contraseña Incorrecta");
        }
      }
      else
      {
        alert("Usuario No Registrado");
      }
    }
  }
  crearcuenta()
  {
    this.router.navigate(['registrousuariosadmin'])
  }

  ngOnInit(): void {
    this.llenarUsuarios();
  }

}
