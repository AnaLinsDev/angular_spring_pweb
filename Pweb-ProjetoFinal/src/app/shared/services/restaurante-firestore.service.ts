import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Restaurante} from '../model/restaurante';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

 
@Injectable({
 providedIn: 'root'
})
export class RestauranteFirestoreService {
 
 colecaoRestaurante: AngularFirestoreCollection<Restaurante>;
 NOME_COLECAO = 'restaurantes'; 
 
 constructor(private afs: AngularFirestore) {
   this.colecaoRestaurante = afs.collection(this.NOME_COLECAO);
 }
 
 listar(): Observable<Restaurante[]> {
   return this.colecaoRestaurante.valueChanges({idField: 'id'});
 }

}
