import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Produto} from '../model/produto';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

 

@Injectable({
  providedIn: 'root'
})
export class ProdutoFirestoreService {

  colecaoProduto: AngularFirestoreCollection<Produto>;
  NOME_COLECAO = 'produtos'; 
  
  constructor(private afs: AngularFirestore) {
    this.colecaoProduto = afs.collection(this.NOME_COLECAO);
  }
  
  listar(): Observable<Produto[]> {
    return this.colecaoProduto.valueChanges({idField: 'id'});
  }

  listarProdutos(id:number): Observable<Produto[]> {
    return this.colecaoProduto.valueChanges({idField: 'id'});
  }
 
 }
 