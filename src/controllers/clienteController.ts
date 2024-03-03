import { Request, Response } from "express";
import { Pedido } from "./pedidoController";

interface Cliente {
    nome: String,
    cpf: number,
    pedido: Pedido[]
};

let clientes: Cliente[] = [];

export class ClienteController {

    getCliente(req: Request, res: Response){
        return res.json(clientes);
    };

    createCliente(req: Request, res: Response){
        const newCliente: Cliente = req.body;
        clientes.push(newCliente);
        return res.status(201).json({ message: 'Novo cliente criado com sucesso!' });
    };

};

const clienteController = new ClienteController();

module.exports = {
    clienteController,
};