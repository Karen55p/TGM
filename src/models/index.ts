import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb() {
    return open({
        filename: './src/models/dados.db',
        driver: sqlite3.Database
    });
}

export async function main() {
    const db = await openDb();

    await db.run(`
        CREATE TABLE IF NOT EXISTS cliente (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            telefone TEXT,
            cpf INTEGER,
            endereco TEXT,
            obs TEXT
            );
    `);

    const pragm = async () => {
    const rows = await db.all('pragma table_info(cliente)');
    console.log(rows);
    }
    /*pragm()*/
    /*insertCliente('aa', 'aa', 123, 'ewq', 'nuh');*/
    
}

main();