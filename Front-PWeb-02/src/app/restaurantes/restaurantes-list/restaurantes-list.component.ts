import { Component, OnInit } from "@angular/core";
import { Restaurante } from "src/app/shared/model/restaurante";
import { RestaurantesService } from "src/app/shared/services/restaurantes.service";


@Component({
  selector: 'app-listagem-Restaurante-tabela',
  templateUrl: './restaurantes-list.component.html',
  styleUrls: ['./restaurantes-list.component.css']
})
export class RestaurantesListComponent  implements OnInit {


  dataSource: Array<Restaurante>;


  constructor(private RestauranteService: RestaurantesService) {
  }

  ngOnInit(): void {
    this.RestauranteService.listar().subscribe(
      Restaurantes => this.dataSource = Restaurantes
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

}