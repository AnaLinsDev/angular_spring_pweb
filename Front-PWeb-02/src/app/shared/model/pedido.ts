export class Pedido{
    id: number;
    dataHora?: Date;
    entregadorId?: number;
    precoTotal?: number;
    produtosId?: number[];
    restauranteId?: number;
    status ?: string;
    usuarioId?: number;
}