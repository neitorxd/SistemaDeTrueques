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
  /* NO OLVIDAR QUE ESTO ES PARA CAMBIAR DE VENTANA*/

  llenarUsuarios()
  {
    this.servicios.obtenerUsuarios().subscribe(lista=>{
      this.listausuarios=lista;
      console.log(lista);
    });
  }

  /** PARA ESTE METODO HAY QUE AGREGAR EL /:id AL app.routingmodule.ts y cambiar el metodo del boton a buscar() en ves de rootear()*/
  /** PARA ESTE METODO HAY QUE AGREGAR EL /:id AL app.routingmodule.ts y cambiar el metodo del boton a buscar() en ves de rootear()*/
  /** PARA ESTE METODO HAY QUE AGREGAR EL /:id AL app.routingmodule.ts y cambiar el metodo del boton a buscar() en ves de rootear()*/
  /** PARA ESTE METODO HAY QUE AGREGAR EL /:id AL app.routingmodule.ts y cambiar el metodo del boton a buscar() en ves de rootear()*/
  /** ││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││ */
  /** ││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││ */
  /** ││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││ */
  /** ││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││ */
  /** ││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││ */
  /** ││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││││ */
  buscar()
  {
    const usuarioSeleccionado = this.listausuarios.find(x => x.usuario === this.user);
    this.idSeleccionada= usuarioSeleccionado?.id;

    console.log(usuarioSeleccionado?.contrasena);

    if(usuarioSeleccionado?.contrasena === this.password)
    {
      this.router.navigate(['landingpage/'+ this.idSeleccionada]);
    }
    else
    {
      alert("Contraseña Incorrecta");
    }

  }
  rootear()
  {
    this.router.navigate(['landingpage'])
  }
  crearcuenta()
  {
    this.router.navigate(['registrousuariosadmin'])
  }

  ngOnInit(): void {
    this.llenarUsuarios();
  }

}
