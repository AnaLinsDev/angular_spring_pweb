import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {Endereco} from '../model/endereco';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class EnderecoFirestoreService {

  colecaoEnderecos: AngularFirestoreCollection<Endereco>;
  NOME_COLECAO = 'enderecos';
  
  constructor(private afs: AngularFirestore) {
    this.colecaoEnderecos = afs.collection(this.NOME_COLECAO);
  }
  
  listar(): Observable<Endereco[]> {
    return this.colecaoEnderecos.valueChanges({idField: 'id'});
  }
  
  inserir(Endereco: Endereco): Observable<object> {
    return from(this.colecaoEnderecos.add(Object.assign({}, Endereco)));
  }
  
  remover(id: string): Observable<void> {
    return from(this.colecaoEnderecos.doc(id).delete());
  }

}
