import {Injectable} from '@angular/core';
import {Usuario} from '../model/usuario';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private email: string;

  URL_USUARIOS = 'http://localhost:3000/usuarios';

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL_USUARIOS, usuario);
  }
  
  pesquisarPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }

  setEmail(email : string){
    this.email = email;
  }
  getEmail() : string{
    return this.email;
  }
}