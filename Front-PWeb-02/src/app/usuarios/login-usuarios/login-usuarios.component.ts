import { Component,  OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
import { MensagensService } from 'src/app/shared/services/mensagens.service';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-login-usuarios',
  templateUrl: './login-usuarios.component.html',
  styleUrls: ['./login-usuarios.component.css']
})
export class LoginUsuariosComponent implements OnInit {
  
  usuarios : Array<Usuario>
  usuario : Usuario;
 
  

  constructor(private usuarioService: UsuariosService, private roteador: Router, private mensagem : MensagensService) {
    
    
   }

  ngOnInit(): void {
    this.usuario = new Usuario()
    this.usuarios = new Array<Usuario>();
    this.usuarioService.listar().subscribe(
      usu => usu.forEach( u => this.usuarios.push(u))
    )
  }

  load(){
    if((this.usuarios.filter(usu => usu.email == this.usuario.email && usu.senha == this.usuario.senha).length != 0)){
           this.roteador.navigate(['restaurantes']);       
      }
    else if(this.usuario.email == null || this.usuario.senha == null){
              this.mensagem.error('preencha todos os campos! ')
      }
    else{
          this.mensagem.error("Tente novamente, algo está errado!")
      }
         
      
    
    
  }

}
