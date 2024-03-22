import { openDb } from './index';

export const insertUser = async (username: string, email: string, nivel: string, senha: string) => {
    const db = await openDb();
    db.run(`
        INSERT INTO user (username, email, nivel, senha)
        VALUES (?, ?, ?, ?);
    `, [username, email, nivel, senha], (err: Error | null) => {
        	if (err) {
                console.error('Erro ao inserir dados:', err. message)
            } else {
                console.log('Dados inseridos com sucesso!');
            }
    });
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