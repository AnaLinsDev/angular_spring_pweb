
export class Carrinho{
    id?: string;
    uuid?: number;
    nome?: string;
    imagem?: URL;
    quantidade?:number;
    descricao?: string;
    usuario_id?: number;
    restaurante_id?: number;
    preco?: number;


constructor(uuid: number,  nome : string, imagem : URL, 
    preco : number, descricao : string, restaurante_id : number, 
    usuario_id : number ) {

    this.uuid = uuid;
    this.nome = nome;
    this.imagem = imagem;
    this.preco = preco;
    this.descricao = descricao;
    this.usuario_id = usuario_id;
    this.restaurante_id = restaurante_id;
  }
}