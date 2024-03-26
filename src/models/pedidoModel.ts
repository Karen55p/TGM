import { openDb } from "./index";
import { error } from 'console';

export const getPedidos = async () => {
    const db = await openDb();
    try {
        const rows = await db.all('SELECT * FROM pedido');
        return (rows);
    } catch (err: any) {
        console.error('Erro ao obter dados da tabela pedido:', err.message);
    }
    db.close();
};

export const insertPedidos = async (prazo: Date, material: string, altura: number, largura: number, comprimento: number, mobilia: string, sugest: string, id_cliente: number) => {
    const db = await openDb();

    try {
        await db.run('PRAGMA foreign_keys = ON;');
        await db.run(`
            INSERT INTO pedido (prazo, material, altura, largura, comprimento, mobilia, sugest, id_cliente) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);
            `, [prazo, material, altura, largura, comprimento, mobilia, sugest, id_cliente]);
    } catch (err) {
        console.error(err);
        throw new Error('msg')
    }

    db.close();
};

export const updatePedidos = async (id: string, prazo: Date, material: string, altura: number, largura: number, comprimento: number, mobilia: string, sugest: string, id_cliente: number) => {
    const db = await openDb();
    try {
        await db.run('PRAGMA foreign_keys = ON;');
        await db.run(`
        UPDATE pedido SET prazo = ?, material = ?, altura = ?, largura = ?, comprimento = ?, mobilia = ?, sugest = ?, id_cliente = ? WHERE id = ?`,
        [prazo, material, altura, largura, comprimento, mobilia, sugest, id_cliente, id]
        );    
    } catch (err: any) {
        console.error('Erro ao atualizar pedido:', err.message)
    }


    db.close();
};

export const deletePedidos = async (id: string) => {
    const db = await openDb();
    try {
        await db.run('DELETE FROM pedido WHERE id = ?', id);
        console.log(`Pedido com ID ${id} deletado com sucesso`);
    } catch (err: any) {
        console.error('Erro ao deletar pedido:', err.message);
    }
    db.close();
};