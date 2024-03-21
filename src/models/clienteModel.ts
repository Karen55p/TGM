import { openDb } from './index';

export const insertCliente = async (nome: string, telefone: string, cpf: number, endereco: string, obs: string) => {
    const db = await openDb();
    db.run(`
        INSERT INTO cliente (nome, telefone, cpf, endereco, obs) 
        VALUES (?, ?, ?, ?, ?);
        `, [nome, telefone, cpf, endereco, obs], (err: Error | null) => {
        if (err) {
            console.error('Erro ao inserir dados:', err.message);
        } else {
            console.log('Dados inseridos com sucesso!');
        }
    });
    db.close();
};

export const getClientes = async () => {
    const db = await openDb();
    try {
        const rows = await db.all('SELECT * FROM cliente');
        return (rows);
    } catch (err: any) {
        console.error('Erro ao obter dados da tabela cliente:', err.message);
    }
    db.close();
};

export const updateClientes = async (id: string, nome: string, telefone: string, cpf: number, endereco: string, obs: string) => {
    const db = await openDb();
    try {
        await db.run(
            'UPDATE cliente SET nome = ?, telefone = ?, cpf = ?, endereco = ?, obs = ? WHERE id = ?',
            [nome, telefone, cpf, endereco, obs, id]
        );
        console.log(`Cliente com ID ${id} atualizado com sucesso!`);
    } catch (err: any) {
        console.error('Erro ao atualizar cliente:', err.message);
    }
    db.close();
};


export const deleteClientes = async (id: string) => {
    const db = await openDb();
    try {
        await db.run('DELETE FROM cliente WHERE id = ?', id);
        console.log(`Cliente com ID ${id} deletado com sucesso!`);
    } catch (err: any) {
        console.error('Erro ao deletar cliente:', err.message);
    }
    db.close();
};

