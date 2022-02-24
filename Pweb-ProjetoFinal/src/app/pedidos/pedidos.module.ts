import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosListComponent } from './pedidos-list/pedidos-list.component';

import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarrinhoModule } from '../carrinho/carrinho.module'
import { RouterModule} from '@angular/router';
import { MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
  declarations: [
    PedidosListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    FormsModule,
    CarrinhoModule
  ]
})
export class PedidosModule { }
