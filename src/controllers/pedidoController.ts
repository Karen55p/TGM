import { Request, Response } from "express";
import { clientes } from './clienteController';
import { Cliente } from './clienteController';

export interface Pedido{
    id: number,
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

    /*createPedido(req: Request, res: Response){
        const clienteId = parseInt(req.params.clienteId, 10);
        const newPedido: Pedido = req.body;

        const index = clientes.findIndex((cliente) => cliente.id === clienteId);

        if (index !== -1) {
            if (!clientes[index].pedido) {
            clientes[index].pedido = [];
            }
            clientes[index].pedido.push(newPedido);
            res.status(201).json({ message: 'Novo pedido criado e associado ao cliente com sucesso!' });
        } else {
            res.status(404).json({ error: 'Cliente não encontrado.' });
        }
    }*/
}

const pedidoController = new PedidoController();

module.exports = {
    pedidoController,
};