import { openDb } from './index';

export const selectFile = async() => {
    const db = await openDb();
    const rows = await db.all('SELECT * FROM upload');
        if(rows){
            return (rows);
        }
        db.close();
};

export const insertFile = async (originalname: string, path: string) => {
    const db = await openDb();

        await db.get(`
        INSERT INTO upload (originalname, path) 
        VALUES (?, ?);
        `, [originalname, path], (err: Error | null) => {
            if(err){
                console.error('Erro ao inserir dados:', err. message)
            } else {
                console.log('Dados inseridos com sucesso!');
            };
        });

        db.close();
    };