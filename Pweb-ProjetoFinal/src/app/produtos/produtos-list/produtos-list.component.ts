import { Component, OnInit } from '@angular/core';
import { Produto } from "src/app/shared/model/produto";
import { ProdutoFirestoreService } from "src/app/shared/services/produto-firestore.service";
import { CarrinhoFirestoreService } from '../../shared/services/carrinho-firestore.service'
import { Carrinho } from 'src/app/shared/model/carrinho';
import { ActivatedRoute, Router } from "@angular/router";
import { Usuario } from 'src/app/shared/model/Usuario';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  dataUsuario:Array<Usuario>; 
  dataSource: Array<Produto>;
  dataSourceCarr: Array<Carrinho>;
  dataSourceCarrinho: Array<Carrinho>;

  mensagemService: any;
  produtoExiste:boolean;

  usuId:number;
  carrinho: Carrinho;
  nomeUsuario:string;
  quantCarr : number;

  constructor(private UsuarioService: UsuarioFirestoreService, private ProdutoService: ProdutoFirestoreService, private route: ActivatedRoute, private CarrinhoService : CarrinhoFirestoreService, private roteador: Router) {
  }
  
   

  ngOnInit(): void {
    this.usuId = this.route.snapshot.params.usuid;
    let resId :number = this.route.snapshot.params.resid;

    this.ProdutoService.listarProdutos(resId).subscribe(
      Produtos => this.dataSource = Produtos.filter(p => p.restaurante_id == resId)
      );

    this.CarrinhoService.listar().subscribe(
      Carrinhos => this.dataSourceCarrinho = Carrinhos
      );

      this.UsuarioService.listar().subscribe(
        Usuarios => {this.dataUsuario = Usuarios.filter(c => c.uuid == this.usuId)
        this.nomeUsuario = this.dataUsuario[0].nome
      }
        );
    
      this.CarrinhoService.listar().subscribe(
          Carrinhos => {this.dataSourceCarr = Carrinhos.filter(c => c.usuario_id == this.usuId)
            this.quantCarr = this.dataSourceCarr.length
          }
        );
  
  
  }

  inserirProduto(produto: Produto): void {
        
    this.CarrinhoService.inserir(new Carrinho(produto.uuid, produto.nome, produto.imagem,
      produto.preco, produto.descricao, produto.restaurante_id,this.usuId )
      ).subscribe()
      this.roteador.navigate(['carrinho/',this.usuId]);

      }

      goToRest(){
        this.roteador.navigate(['restaurantes/', this.usuId]);
      }
      goToCarr(){
        this.roteador.navigate(['carrinho/', this.usuId]);
      }
}
