import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
    $("#login-button").click(function(event){
      event.preventDefault();
    
    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
 });
  }
  /* NO OLVIDAR QUE ESTO ES PARA CAMBIAR DE VENTANA*/
  rootear()
  {
    this.router.navigate(['landingpage']);
  }
  crearcuenta()
  {
    this.router.navigate(['registrousuariosadmin'])
  }

  ngOnInit(): void {
  }

}
