import { Endereco } from "./endereço";

export class Restaurante{
    id: number;
    cnpj?: string;
    nome?: string;
    nota?: number;
    imagem?: string;
    descricao?: string;
    telefone?: string[];
    endereço?: Endereco;
    produtos?: number[];

}