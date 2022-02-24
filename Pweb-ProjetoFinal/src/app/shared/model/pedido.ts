export class Pedido{
    id: number;
    dataHora?: Date;
    precoTotal?: number;
    produtosId?: number[];
    restauranteId?: number;
    status ?: string;
    usuarioId?: number;
}