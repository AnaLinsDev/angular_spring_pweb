import { Injectable } from '@angular/core';
import {Pedido} from '../model/pedido';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class PedidoFirestoreService {

  colecaoPedido: AngularFirestoreCollection<Pedido>;
  NOME_COLECAO = 'pedidos'; 
  
  constructor(private afs: AngularFirestore) {
    this.colecaoPedido = afs.collection(this.NOME_COLECAO);
  }
  
  inserir(pedido: Pedido): Observable<object> {
     return from(this.colecaoPedido.add(Object.assign({}, pedido)));
  }
  

  listar(): Observable<Pedido[]> {
    return this.colecaoPedido.valueChanges({idField: 'id'});
  }

  listarPedidos(id:number): Observable<Pedido[]> {
    return this.colecaoPedido.valueChanges({idField: 'id'});
  }
 
 }
 