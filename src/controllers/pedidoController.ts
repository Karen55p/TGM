import { Request, Response } from "express";
import { insertPedidos, 
    getPedidos, 
    updatePedidos, 
    deletePedidos } from "../models/pedidoModel";

interface Pedido{
    id: number,
    prazo: Date,
    material: string,
    altura: number,
    largura: number,
    comprimento: number,
    mobilia: string,
    sugest: string,
    id_cliente: number
}

export class PedidoController {

    getPedido(req: Request, res: Response){
        getPedidos().then((rows) => {
            return res.json(rows);   
        })
    };

    createPedido = async (req: Request, res: Response) => {
        try{
            const newPedido: Pedido = req.body;
            await insertPedidos(newPedido.prazo, newPedido.material, newPedido.altura, newPedido.largura, newPedido.comprimento, newPedido.mobilia, newPedido.sugest, newPedido.id_cliente);
            return res.status(201).json({ message: 'Novo pedido criado com sucesso!' });
        } catch (err: any | null){
            console.error('Erro ao criar pedido:' + err.message);
            return res.status(500).json({ error: 'Erro ao criar pedido.' + err.message});
        }

    };

    updatePedido = async (req: Request, res: Response) => {
        try{
            const { id } = req.params;
            const { id_cliente } = req.params;
            const updatedPedido: Pedido = req.body;
            await updatePedidos(id, updatedPedido.prazo, updatedPedido.material, updatedPedido.altura, updatedPedido.largura, updatedPedido.comprimento, updatedPedido.mobilia, updatedPedido.sugest, updatedPedido.id_cliente);

            console.log(`Pedido com ID ${id} do cliente com ID ${id_cliente} atualizado com sucesso!`);
            return res.status(200).json({ message: `Pedido com ID ${id} do cliente com ID ${id_cliente} atualizado com sucesso!` });
        } catch (err: any | null){
            console.error('Erro ao atualizar pedido:', err.message);
            return res.status(500).json({ error: 'Erro ao atualizar pedido.' + err.message});
        }
    };

    deletePedido = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await deletePedidos(id);

            console.log(`Pedido com ID ${id} com sucesso!`);
            return res.status(200).json({ message: `Pedido com ID ${id} deletado com sucesso!` });

        } catch (err: any){
            console.error('Erro ao deletar pedido:', err.message);
            return res.status(500).json({ error: 'Erro ao deletar pedido: ' + err.message });
        };
    };

};