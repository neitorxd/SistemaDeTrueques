import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/modulos/producto';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  idusuario:string|null=null;

  constructor(private router:Router, private route:ActivatedRoute, private servicio:ProductosService) {}

  productos:Producto[]=[];
  listaimagenes:string[]=[];
  

  ngOnInit(): void {
    this.idusuario=this.route.snapshot.paramMap.get('idusuario');
    this.llenarProductos();
  }

  llenarProductos()
  {
    var element:string[] | null = null;
    this.servicio.obtenerProductos().subscribe(listaproductos=>{
      this.productos=listaproductos;
    });
    for (let i = 0; i< this.productos.length; i++) {
      element = this.productos[i].imagenes;
      if(element.length === 0)
      {
        this.listaimagenes.push("https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg");
      }
      else
      {
        this.listaimagenes.push(element[0]);
      }
      
    }
    console.log(this.listaimagenes);
  }
  /** navegar(hola:number)
  {
    this.router.navigate(['crearproducto',hola]);
  }
  */
}
