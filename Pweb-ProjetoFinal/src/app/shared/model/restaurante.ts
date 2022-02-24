import { Endereco } from "./endereco";
import { Produto } from "./produto";

export class Restaurante{
    id: number;
    uuid?: number;
    cnpj?: string;
    nome?: string;
    nota?: number;
    descricao?: string;
    telefone?: string[];
    endereço?: Endereco;
    produtos?: number[];

}