import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Carrinho } from "src/app/shared/model/carrinho";
import { CarrinhoFirestoreService } from "src/app/shared/services/carrinho-firestore.service";
import { Produto } from "src/app/shared/model/produto"
import { Input } from '@angular/core';
import { MensagensService } from 'src/app/shared/services/mensagens.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';
import { Usuario } from 'src/app/shared/model/Usuario';

@Component({
  selector: 'app-carrinho-list',
  templateUrl: './carrinho-list.component.html',
  styleUrls: ['./carrinho-list.component.css']
})
export class CarrinhoListComponent implements OnInit {

  dataSource: Array<Carrinho>;
  dataSourceProdutos: Array<Produto>;
  carrinho : Carrinho;
  carrinhoDoUsuario: Array<Carrinho>; 
  precoTotal: number;
  dataUsuario:Array<Usuario>; 
  nomeUsuario:string;
  usuId: number;

  constructor(private CarrinhoService: CarrinhoFirestoreService,private UsuarioService: UsuarioFirestoreService,  private mensagem: MensagensService,private roteador: Router, private route: ActivatedRoute) {
  }
  
   
  ngOnInit(): void {

    this.precoTotal = 0;
    this.dataSource = [];
    
    this.usuId  = this.route.snapshot.params.usuid;

    this.CarrinhoService.listar().subscribe(
      Carrinhos => {this.dataSource = Carrinhos.filter(c => c.usuario_id == this.usuId);
        this.precoTotal = 0;
        this.dataSource.forEach(c => this.precoTotal = this.precoTotal + c.preco)
      }
      );

      this.UsuarioService.listar().subscribe(
        Usuarios => {this.dataUsuario = Usuarios.filter(c => c.uuid == this.usuId)
        this.nomeUsuario = this.dataUsuario[0].nome
      })
   
  }

  fazerPedido(){
    this.roteador.navigate(['pedidos/', this.usuId]);  
    this.mensagem.success(`Pedido Enviado!`);
  }

  cadastroEndereco(){
    this.roteador.navigate(['cadastroEndereco/', this.usuId]);  
  }

  goToRest(){
    this.roteador.navigate(['restaurantes/', this.usuId]);  
  }

  removerProduto(carrinho: Carrinho){
    console.log(carrinho);
    this.CarrinhoService.removerCarr(carrinho).subscribe();
  }

}
