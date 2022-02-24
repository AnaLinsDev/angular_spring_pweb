import { Component,  OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
import { MensagensService } from 'src/app/shared/services/mensagens.service';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';

@Component({
  selector: 'app-login-usuarios',
  templateUrl: './login-usuarios.component.html',
  styleUrls: ['./login-usuarios.component.css']
})
export class LoginUsuariosComponent implements OnInit {
  
  usuarios : Array<Usuario>
  usuario : Usuario;
 
  
  constructor(private usuarioService: UsuarioFirestoreService, private roteador: Router, private mensagem : MensagensService) {
    
    
   }

  ngOnInit(): void {
    this.usuario = new Usuario();

    this.usuarios = [];
    this.usuarioService.listar().subscribe(
      usu => this.usuarios = usu
    )
  }

  load(){
    let usuarioExiste : Boolean = false;
    if(this.usuario.email == null || this.usuario.senha == null){
      this.mensagem.error('preencha todos os campos! ')
    }else{
      for(let i = 0; i < this.usuarios.length; i++){
        if (this.usuarios[i].email == this.usuario.email 
          && this.usuario.senha == this.usuarios[i].senha){
          this.usuario = this.usuarios[i]
          usuarioExiste = true;
          this.roteador.navigate(['restaurantes/', this.usuario.uuid])
        }
      }
    if (usuarioExiste == false){
      this.mensagem.error("Tente novamente!!!!")
    }
  }
    
  }
}
