import { Component, OnInit } from '@angular/core';
import { Pedido } from "src/app/shared/model/pedido";
import { Produto } from "src/app/shared/model/produto";
import { PedidoFirestoreService } from "src/app/shared/services/Pedido-firestore.service";
import { ActivatedRoute} from '@angular/router';
import { CarrinhoFirestoreService } from '../../shared/services/carrinho-firestore.service'
import { Carrinho } from 'src/app/shared/model/carrinho';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';
import { Usuario } from 'src/app/shared/model/Usuario';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {

  dataSource: Array<Carrinho>;
  dataSourceProduto: Array<number>;
  pedido : Pedido;
  carrinho : Carrinho;
  carrinhoDoUsuario: Array<Carrinho>; 
  precoTotal: number;
  dataUsuario:Array<Usuario>; 
  nomeUsuario:string;
  usuId :number

  constructor(private PedidoService: PedidoFirestoreService,private UsuarioService: UsuarioFirestoreService,private CarrinhoService: CarrinhoFirestoreService, private route: ActivatedRoute) {
  }
  
   
  ngOnInit(): void {
    this.precoTotal = 0;
    this.dataSource = [];
    this.dataSourceProduto = [];

    this.pedido = new Pedido();

    this.usuId  = this.route.snapshot.params.usuid;

    this.CarrinhoService.listar().subscribe(
      Carrinhos => {this.dataSource = Carrinhos.filter(c => c.usuario_id == this.usuId);
      this.dataSourceProduto = [];
      this.dataSource.forEach(c => this.precoTotal = this.precoTotal + c.preco)
      this.dataSource.forEach(c => this.dataSourceProduto.push(c.uuid))
      this.pedido.usuarioId = this.usuId;
      this.pedido.produtosId = this.dataSourceProduto;
      this.pedido.status = "DONE"
      this.pedido.precoTotal = this.precoTotal;
      this.pedido.dataHora = new Date();
      this.PedidoService.inserir(this.pedido).subscribe()
      })

    this.UsuarioService.listar().subscribe(
        Usuarios => {this.dataUsuario = Usuarios.filter(c => c.uuid == this.usuId)
        this.nomeUsuario = this.dataUsuario[0].nome
      }
        );


  }
}
