import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantesListComponent } from './restaurantes/restaurantes-list/restaurantes-list.component';
import { CadastroUsuariosComponent } from './usuarios/cadastro-usuarios/cadastro-usuarios.component';
import { LoginUsuariosComponent } from './usuarios/login-usuarios/login-usuarios.component';

const routes: Routes = [
  {
    path: 'cadastrarusuario',
    component: CadastroUsuariosComponent
  },
  {
    path: 'login',
    component: LoginUsuariosComponent
  },
  {
    path: 'restaurantes',
    component: RestaurantesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
