import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  imagenes:string[] =[];
  linkImagen:string="";
  idusuario:string|null=null;


  constructor(private servicio:ProductosService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idusuario=this.route.snapshot.paramMap.get('idusuario');
  }

  urls = new Array<string>();

  llenarImagenes()
  {
    if(this.linkImagen==="" || this.linkImagen.includes('http')=== false)
    {
      alert("No hay imagenes");
      this.imagenes=[];
    }
    else
    {
      this.imagenes = [];
      let spliteo = this.linkImagen.split(",");
      this.imagenes = spliteo;
    }
  }

  /** EL METODO DE ABAJO ERA PARA MOSTRAR IMAGENS DE UN USUARIO DESDE SU EQUIPO PERO NO FUNCIONO */

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

  /** GUARDAR IMAGENES EN ARREGLO */

  guardar()
  {
    if(this.imagenes===[]){

      alert("No hay Imagenes Ingresadas");
      window.location.reload();

    }
    else
    {
      let productoagregado:Producto = {
        nombre:this.nombreProducto,
        precio:this.precioProducto,
        descripcion:this.descripcionProducto,
        imagenes:this.imagenes
      }
      this.servicio.crearProducto(productoagregado).subscribe();
      console.log(productoagregado);
      alert("El producto "+productoagregado.nombre +"a sido Agregado con un costo de $"+productoagregado.precio)
      window.location.reload();
    }
    
    
  }

  agregar()
  {
    
  }
  
}
