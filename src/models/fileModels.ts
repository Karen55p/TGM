import { error } from 'console';
import { openDb } from './index';

export const selectFile = async(id: string) => {
    const db = await openDb();
    const rows = await db.get('SELECT * FROM upload where id = ?', id);
        if(rows){
            return (rows);
        }
        db.close();
};

export const insertFile = async (originalname: string, path: string/*, id_pedido: number*/) => {
    const db = await openDb();

        await db.get(`
        INSERT INTO upload (originalname, path) 
        VALUES (?, ?);
        `, [originalname, path/*, id_pedido*/], (err: Error | null) => {
            if(err){
                console.error('Erro ao inserir dados:', err. message)
            } else {
                console.log('Dados inseridos com sucesso!');
            };
        });

        db.close();
};

export const deleteFile = async(id: string) => {
    const db = await openDb();
    const file = await db.get('select * from upload where id = ?', id);
    if(!file){
        throw error;
    } else {
        db.run('DELETE from upload where id = ?', [id]);
    };
    db.close();
};