import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modulos/producto';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {

  nombreProducto:string="";
  descripcionProducto:string="";
  precioProducto:number=0;
  imagenes:any[] =[];


  constructor(private servicio:ProductosService) { }

  ngOnInit(): void {
  }

  urls = new Array<string>();

  seleccion(event:any) {
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        this.imagenes.push(file);
        reader.readAsDataURL(file);
      }
    }
    console.log(this.imagenes);
  }

  guardar()
  {
    let productoagregado:Producto = {
      nombre:this.nombreProducto,
      precio:this.precioProducto,
      descripcion:this.descripcionProducto
    }
    this.servicio.crearProducto(productoagregado).subscribe();
    console.log(productoagregado);
    alert("El producto "+productoagregado.nombre +"a sido Agregado con un costo de $"+productoagregado.precio)
  }

  
}
