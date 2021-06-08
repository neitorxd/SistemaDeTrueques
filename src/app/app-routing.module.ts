import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './Paginas/Ventanas-Usuario/usuario/usuario.component';
import { AdminComponent } from './Paginas/admin/admin.component';
import { HeaderComponent } from './Paginas/Generales/header/header.component';
import { FooterComponent } from './Paginas/Generales/footer/footer.component';
import { PerfilUsuarioComponent } from './Paginas/Ventanas-Usuario/perfil-usuario/perfil-usuario.component';
import { RegistroUsuariosAdminComponent } from './Paginas/Ventanas-Admin/registro-usuarios-admin/registro-usuarios-admin.component';
import { LandingPageComponent } from './Paginas/Generales/landing-page/landing-page.component';
import { VentanaProductosComponent } from './Paginas/Generales/ventana-productos/ventana-productos.component';
import { CrearproductoComponent } from './Paginas/Generales/crearproducto/crearproducto.component';


const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'login',component: LoginComponent},
  {path: 'usuario',component: UsuarioComponent},
  {path: 'admin',component: AdminComponent},
  {path: 'header',component: HeaderComponent},
  {path: 'footer',component: FooterComponent},
  {path: 'perfilusuario',component:PerfilUsuarioComponent},
  {path: 'registrousuariosadmin',component: RegistroUsuariosAdminComponent},
  {path: 'landingpage',component: LandingPageComponent},
  {path: 'ventanaproductos' ,component: VentanaProductosComponent},
  {path: 'crearproducto', component:CrearproductoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
