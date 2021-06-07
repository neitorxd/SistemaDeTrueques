import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  imagenes:string[] =[]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  cargarImagenes()
  {
    console.log(this.imagenes);
  }
}
