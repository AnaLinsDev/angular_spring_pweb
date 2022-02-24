import { Endereco } from "./endereco";

export class Usuario {
    id?: number;
    uuid?: number;
    nome?: string;
    email?: string;
    senha?: string;
    endereco?:Endereco;
    telefone?: string;

    constructor(id?: number, usuario: Usuario = {}) {
        this.id = id;
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.senha = usuario.senha;
        this.telefone = usuario.telefone;
      }
}