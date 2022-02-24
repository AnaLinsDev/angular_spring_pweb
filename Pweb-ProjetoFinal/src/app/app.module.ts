import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginUsuariosComponent } from './usuarios/login-usuarios/login-usuarios.component';
import { CadastroUsuariosComponent } from './usuarios/cadastro-usuarios/cadastro-usuarios.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import '@angular/compiler'
import {MatMenuModule} from '@angular/material/menu';
import { RestaurantesListComponent } from './restaurantes/restaurantes-list/restaurantes-list.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { MatTableModule } from '@angular/material/table';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';
import { EnderecoModule } from './endereco/endereco.module';
import { RestaurantesModule } from './restaurantes/restaurantes.module';
import { ProdutosModule } from './produtos/produtos.module';
import { UsuarioModule } from './usuarios/usuarios.module';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { FirestoreModule } from './firestore/firestore.module';
import { PedidosModule } from './pedidos/pedidos.module';


@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    MatTableModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    UsuarioModule,
    EnderecoModule,
    RestaurantesModule,
    MatSnackBarModule,
    ProdutosModule,
    FirestoreModule,
    PedidosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
