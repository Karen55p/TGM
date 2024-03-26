import { openDb } from './index';

export const insertUser = async (username: string, email: string, nivel: string, senha: string) => {
    const db = await openDb();
    try {
        await db.run(`
        INSERT INTO user (username, email, nivel, senha)
        VALUES (?, ?, ?, ?);
    `, [username, email, nivel, senha]);

    } catch (err) {
        console.log(err);
        throw new Error('Usuário não inserido')
    };
    db.close();
};

export const selectUser = async () => {
    const db = await openDb();
    try {
        const rows = await db.all('SELECT * FROM user');
        return (rows);
    } catch (err: any) {
        console.error('Erro ao obter dados da tabela user:', err.message);
    }
    db.close();
};

export const updateUsers = async (id: string, userName: string, email: string, nivel: string, senha: string) => {
    const db = await openDb();
    try {
        await db.run(
            'UPDATE user SET userName = ?, email = ?, nivel = ?, senha = ? WHERE id = ?',
            [userName, email, senha, nivel, id]
        );
        console.log(`Usuário com ID ${id} atualizado com sucesso!`);
    } catch (err: any) {
        console.error('Erro ao atualizar usuário:', err.message);
    }
    db.close();
};

export const deleteUsers = async (id: string) => {
    const db = await openDb();
    try {
        await db.run('DELETE FROM user WHERE id = ?', id);
        console.log(`Usuário com ID ${id} deletado com sucesso!`);
    } catch (err: any) {
        console.error('Erro ao deletar Usuário:', err.message);
    }
    db.close();
};

export const login = async (username: string, senha: string) => {
    const db = await openDb();
    try{
        const rows = await db.get(`SELECT * FROM user WHERE username = ? AND senha = ?`, username, senha);
        return (rows);
    } catch(err: any){
        console.error('Erro ao fazer login', err.message);
    }
    db.close();
};