import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/shared/model/endereco';
import { MensagensService } from 'src/app/shared/services/mensagens.service';
import { EnderecoFirestoreService } from 'src/app/shared/services/endereco-firestore.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.css']
})
export class CadastroEnderecoComponent implements OnInit {

  endereco : Endereco;
  enderecos : Array<Endereco>;
  usuId: number;

  constructor(private enderecoService: EnderecoFirestoreService,  private mensagem: MensagensService,  private route: ActivatedRoute) { 

  }

  ngOnInit(): void {

    this.usuId  = this.route.snapshot.params.usuid;

    this.endereco = new Endereco();
    this.enderecos = new Array<Endereco>();
    this.enderecoService.listar().subscribe(
      usu => usu.forEach( u => this.enderecos.push(u))
    )
  }

  inserirEndereco(): void {

    if (this.endereco.cep == null || this.endereco.numero_do_local == null ){
      this.mensagem.error('preencha todos os campos!')
    }
    else{
        this.endereco.usuario_id = this.usuId;
        console.log(this.endereco)
        this.enderecoService.inserir(this.endereco).subscribe(
        enderecoInserido => {
        this.enderecos.push(enderecoInserido);
        this.mensagem.success(`Endereco inserido com sucesso!`);

      } 
    );
  }
}
}

