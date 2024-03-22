import { Request, Response } from "express";
import { insertUser } from "../models/userModel";
import { selectUser } from "../models/userModel";
import { updateUsers } from "../models/userModel";
import { deleteUsers } from "../models/userModel";

interface User {
    id: number,
    username: string,
    email: string,
    nivel: string,
    senha: string
};

export class UserController {

    createUser(req: Request, res: Response){
        const newUser: User = req.body;
        insertUser(newUser.username, newUser.email, newUser.nivel, newUser.senha);
        return res.status(201).json({ message: 'Novo usuário cadastrado com sucesso!' });
    };

    getUser(req: Request, res: Response){
        selectUser().then((rows) => {
            return res.json(rows);
        })
    };

    updateUser = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const updatedUser: User = req.body;
            await updateUsers(id, updatedUser.username, updatedUser.email, updatedUser.nivel, updatedUser.senha);
            console.log(`Usuário com ID ${id} atualizado com sucesso!`);
            return res.status(200).json({ message: `Usuário com ID ${id} atualizado com sucesso!` });
        } catch (err: any){
            console.error('Erro ao atualizar usuário:', err.message);
            return res.status(500).json({ error: 'Erro ao atualizar usuário.' });
        };
    };

    deleteUser = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await deleteUsers(id);

            console.log(`Usuário com ID ${id} deletado com sucesso!`);
            return res.status(200).json({ message: `Usuário com ID ${id} deletado com sucesso!` });
        } catch (err: any) {
            console.error('Erro ao deletar usuário:', err.message);
            return res.status(500).json({ error: 'Erro ao deletar usuário.' });
        }
    };

};