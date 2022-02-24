import { Component, OnInit, Input, Output, EventEmitter  } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Carrinho } from "src/app/shared/model/carrinho";
import { Restaurante } from "src/app/shared/model/restaurante";
import { Usuario } from "src/app/shared/model/Usuario";
import { CarrinhoFirestoreService } from "src/app/shared/services/carrinho-firestore.service";
import { RestauranteFirestoreService } from "src/app/shared/services/restaurante-firestore.service";
import { UsuarioFirestoreService } from "src/app/shared/services/usuario-firestore.service";


@Component({
  selector: 'app-listagem-Restaurante-tabela',
  templateUrl: './restaurantes-list.component.html',
  styleUrls: ['./restaurantes-list.component.css']
})

export class RestaurantesListComponent  implements OnInit {

  dataSourceCarr: Array<Carrinho>;
  dataSource: Array<Restaurante>;
  dataUsuario:Array<Usuario>; 
  nomeUsuario:string;
  quantCarr : number

  constructor(private CarrinhoService: CarrinhoFirestoreService, private UsuarioService: UsuarioFirestoreService,private RestauranteService: RestauranteFirestoreService, private roteador: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.quantCarr = 0;
    let usuId :number = this.route.snapshot.params.usuid;

    this.UsuarioService.listar().subscribe(
      Usuarios => {this.dataUsuario = Usuarios.filter(c => c.uuid == usuId)
      this.nomeUsuario = this.dataUsuario[0].nome
    }
      );

    this.RestauranteService.listar().subscribe(
      Restaurantes => this.dataSource = Restaurantes
);

    this.CarrinhoService.listar().subscribe(
      Carrinhos => {this.dataSourceCarr = Carrinhos.filter(c => c.usuario_id == usuId)
        this.quantCarr = this.dataSourceCarr.length
      }
    );
  }

  filtrar(texto: string): void {
    if(texto.trim() == ""){
      this.RestauranteService.listar().subscribe(
        Restaurantes => this.dataSource = Restaurantes
      );
    }else{
      this.dataSource = this.dataSource.filter(restaurante => restaurante.nome.toLowerCase().startsWith(texto.toLowerCase()) ) ;
    }
  }

  goToLink(resid: string): void{
    let usuId :number = this.route.snapshot.params.usuid;
    this.roteador.navigate(['produtos/',resid, usuId]);
  }
  goToCarr(){
    let usuId :number = this.route.snapshot.params.usuid;
    this.roteador.navigate(['carrinho/', usuId]);
  }


}