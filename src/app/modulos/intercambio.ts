import { ProductosService } from "../servicios/productos.service"
import { Producto } from "./producto";
import { Usuario } from "./usuario";

export interface Intercambio {
    id?:number,
    productos:Producto[],
    usuarios:Usuario[],
    aceptado:boolean
}
