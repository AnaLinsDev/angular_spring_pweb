import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantesListComponent } from './restaurantes/restaurantes-list/restaurantes-list.component';
import { CadastroUsuariosComponent } from './usuarios/cadastro-usuarios/cadastro-usuarios.component';
import { LoginUsuariosComponent } from './usuarios/login-usuarios/login-usuarios.component';
import { CadastroEnderecoComponent } from './endereco/cadastro-endereco/cadastro-endereco.component';
import { ProdutosListComponent } from './produtos/produtos-list/produtos-list.component';
import { CarrinhoListComponent } from './carrinho/carrinho-list/carrinho-list.component';
import { PedidosListComponent } from './pedidos/pedidos-list/pedidos-list.component';


const routes: Routes = [
  { path: '',   
  redirectTo: 'login', 
  pathMatch: 'full' 
  },
  {
    path: 'cadastrarusuario',
    component: CadastroUsuariosComponent
  },
  {
    path: 'login',
    component: LoginUsuariosComponent
  },
  {
    path: 'restaurantes/:usuid',
    component: RestaurantesListComponent
  },
  {
    path: 'cadastroEndereco/:usuid',
    component: CadastroEnderecoComponent
  },
  {
    path: 'produtos/:resid/:usuid',
    component: ProdutosListComponent
  },
  {
    path: 'carrinho/:usuid',
    component: CarrinhoListComponent
  },
  {
    path: 'pedidos/:usuid',
    component: PedidosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
