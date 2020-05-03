import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalidaComponent } from './salida/salida.component';
import { EntradaComponent } from './entrada/entrada.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
//import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  //{ path: 'heroes', component: HeroesComponent }
  {path: 'salida', component: SalidaComponent},
  {path: 'entrada', component: EntradaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'Registro', component: RegistroComponent},
  {path: '', component: LoginComponent},
  {path: 'Principal', component: PrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
