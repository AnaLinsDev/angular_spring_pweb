
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
import { MensagensService } from 'src/app/shared/services/mensagens.service';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {

  usuario : Usuario; 
  usuarios : Array<Usuario>;

  constructor(private usuarioService: UsuariosService,  private mensagem: MensagensService, private roteador: Router) { 
    
    
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
    this.usuarioService.listar().subscribe(
      usu => usu.forEach( u => this.usuarios.push(u))
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
          console.log(this.usuario)
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
