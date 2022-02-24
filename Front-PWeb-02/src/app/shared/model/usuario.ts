
export class Usuario {
    id?: number;
    nome?: string;
    email?: string;
    senha?: string;
    telefone?: string;

    constructor(id?: number, usuario: Usuario = {}) {
        this.id = id;
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.senha = usuario.senha;
        this.telefone = usuario.telefone;
      }
}