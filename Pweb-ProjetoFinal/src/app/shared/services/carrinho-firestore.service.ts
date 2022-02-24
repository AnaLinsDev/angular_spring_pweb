import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { Carrinho } from '../model/carrinho';
import { Produto } from '../model/produto';
 
@Injectable({
  providedIn: 'root'
})
export class CarrinhoFirestoreService {


  colecaoCarrinhos: AngularFirestoreCollection<Carrinho>;
  NOME_COLECAO = 'carrinho';
  
  constructor(private afs: AngularFirestore) {
    this.colecaoCarrinhos = afs.collection(this.NOME_COLECAO);
  }
  
  listar(): Observable<Carrinho[]> {
    return this.colecaoCarrinhos.valueChanges({idField: 'id'});
  }

  inserir(Carrinho: Carrinho): Observable<object> {
    return from(this.colecaoCarrinhos.add(Object.assign({}, Carrinho)));
  }
  
  remover(id: string): Observable<void> {
    return from(this.colecaoCarrinhos.doc(id).delete());
  }

  removerCarr(carrinho: Carrinho): Observable<void> {
    return from(this.colecaoCarrinhos.doc(carrinho.id).delete());
  }

  atualizar(carrinho: Carrinho): Observable<void> {
    delete carrinho.id;
    return from(this.colecaoCarrinhos.doc(carrinho.id).update(Object.assign({}, carrinho)));
  }



}