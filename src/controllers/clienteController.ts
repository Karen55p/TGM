import { Request, Response } from "express";
import { insertCliente } from "../models/clienteModel";
import { getClientes } from "../models/clienteModel";
import { deleteClientes } from "../models/clienteModel";
import { updateClientes } from "../models/clienteModel";

export interface Cliente {
    id: number,
    nome: string,
    telefone: string,
    cpf: number,
    endereco: string,
    obs: string,
};

export let clientes: Cliente[] = [];

export class ClienteController {

    getCliente(req: Request, res: Response){
        getClientes().then((rows) => {
            return res.json(rows);
        })
    };

    createCliente(req: Request, res: Response){
        const newCliente: Cliente = req.body;
        insertCliente(newCliente.nome, newCliente.telefone, newCliente.cpf, newCliente.endereco, newCliente.obs);
        return res.status(201).json({ message: 'Novo cliente criado com sucesso!' });
        
        /*clientes.push(newCliente);
        */
    };

    updateCliente = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const updatedCliente: Cliente = req.body;
            await updateClientes(id, updatedCliente.nome, updatedCliente.telefone, updatedCliente.cpf, updatedCliente.endereco, updatedCliente.obs); // Aguarde a conclusão da função
    
            console.log(`Cliente com ID ${id} atualizado com sucesso!`);
            return res.status(200).json({ message: `Cliente com ID ${id} atualizado com sucesso!` });
        } catch (err: any) {
            console.error('Erro ao atualizar cliente:', err.message);
            return res.status(500).json({ error: 'Erro ao atualizar cliente.' });
        }
    };

    deleteCliente = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await deleteClientes(id); // Chame a função com o ID
    
            console.log(`Cliente com ID ${id} deletado com sucesso!`);
            return res.status(200).json({ message: `Cliente com ID ${id} deletado com sucesso!` });
        } catch (err: any) {
            console.error('Erro ao deletar cliente:', err.message);
            return res.status(500).json({ error: 'Erro ao deletar cliente.' });
        }
    };


};

const clienteController = new ClienteController();

module.exports = {
    clienteController,
};