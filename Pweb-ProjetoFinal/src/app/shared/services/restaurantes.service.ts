import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Restaurante } from '../model/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {
  URL_RESTAURANTES = 'http://localhost:3000/restaurantes';
  

  constructor(private httpClient : HttpClient) { }

  listar(): Observable<Restaurante[]> {
    return this.httpClient.get<Restaurante[]>(this.URL_RESTAURANTES);
  }

  inserir(restaurante: Restaurante): Observable<Restaurante> {
    return this.httpClient.post<Restaurante>(this.URL_RESTAURANTES, restaurante);
  }
}
