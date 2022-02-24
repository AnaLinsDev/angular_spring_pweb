
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
import { MensagensService } from 'src/app/shared/services/mensagens.service';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {

  usuario : Usuario; 
  usuarios : Array<Usuario>;
  usuariosAux : Array<Usuario>;
  maiorId: number;

  constructor(private usuarioService: UsuarioFirestoreService,  private mensagem: MensagensService, private roteador: Router) {   
  }

  ngOnInit(): void {
    this.maiorId = -1;
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();

    this.usuarioService.listar().subscribe(
      usu => this.usuarios = usu
    )
    
    this.usuarioService.listar().subscribe(
      usu => {this.usuariosAux = usu.filter(
        u => {if (u.uuid > this.maiorId)
          {this.maiorId = u.uuid}})
      }
    )
  }
  inserirUsuario(): void {
    if (this.usuarios.find(x => x.email== this.usuario.email)) {
      this.mensagem.error('já existe o com esse email!');
    }
    else{
      if (this.usuario.email == null || this.usuario.senha == null || 
        this.usuario.telefone == null || this.usuario.nome == null){
        this.mensagem.error('preencha todos os campos!')
      }
      else{
          this.maiorId = this.maiorId + 1;
          this.usuario.uuid = this.maiorId;
          this.usuarioService.inserir(this.usuario).subscribe(
          usuarioInserido => {
            this.usuarios.push(usuarioInserido);
            this.mensagem.success(`Usuário inserido com sucesso!`);
            this.roteador.navigate(['login']);
        } 
      );
    }
  }
  }
}
