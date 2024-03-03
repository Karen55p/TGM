import { Request, Response } from "express";

export interface Pedido{
    Nome: String,
    Prazo: number
}

let pedidos: Pedido[] = [];

export class PedidoController {

    getPedido(req: Request, res: Response){
        return res.json(pedidos);
    };

    createPedido(req: Request, res: Response){
        const newPedido: Pedido = req.body;
        pedidos.push(newPedido);
        return res.status(201).json({ message: 'Novo pedido criado com sucesso!' });
    };
}

const pedidoController = new PedidoController();

module.exports = {
    pedidoController,
};