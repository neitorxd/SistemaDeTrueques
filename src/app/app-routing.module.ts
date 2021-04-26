import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './Paginas/usuario/usuario.component';
import { AdminComponent } from './Paginas/admin/admin.component';
import { HeaderComponent } from './Paginas/header/header.component';
import { FooterComponent } from './Paginas/footer/footer.component';
import { PerfilUsuarioComponent } from './Paginas/perfil-usuario/perfil-usuario.component';
import { RegistroUsuariosAdminComponent } from './Paginas/registro-usuarios-admin/registro-usuarios-admin.component';
import { LandingPageComponent } from './Paginas/landing-page/landing-page.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'login',component: LoginComponent},
  {path: 'usuario',component: UsuarioComponent},
  {path: 'admin',component: AdminComponent},
  {path: 'header',component: HeaderComponent},
  {path: 'footer',component: FooterComponent},
  {path: 'perfilusuario',component:PerfilUsuarioComponent},
  {path: 'registrousuariosadmin',component: RegistroUsuariosAdminComponent},
  {path: 'landingpage',component: LandingPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
