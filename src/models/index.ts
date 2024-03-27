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
            nome TEXT not null,
            telefone TEXT not null,
            cpf INTEGER not null,
            endereco TEXT not null,
            obs TEXT
            );
    `);

    await db.run(`
        CREATE TABLE IF NOT EXISTS pedido (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            prazo DATE,
            material TEXT,
            altura FLOAT,
            largura FLOAT,
            comprimento FLOAT, 
            mobilia TEXT not null,
            sugest TEXT,
            id_cliente INTEGER not null,
            FOREIGN KEY (id_cliente) references cliente(id)
        );
    `);

    await db.run(`
            CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE not null,
                email TEXT not null,
                nivel TEXT not null,
                senha TEXT not null
            );
    `);

    await db.run(`
        CREATE TABLE IF NOT EXISTS upload (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            originalname VARCHAR(255) NOT NULL,
            path VARCHAR(255) NOT NULL
        );
      
    `)

    const pragm = async () => {
    const rows = await db.all('pragma table_info(user)');
    console.log(rows);
    }

    const select = async () => {
        const rows = await db.all('select * from upload');
        console.log(rows);
        }

    const drop = async () =>{
        await db.run(`
        DROP TABLE upload;
        `);
    console.log('tabela deletada');
    };

    const tables = async () => {
        const rows = await db.run(`
        SELECT name FROM sqlite_master WHERE type='table';
        `);
        console.log(rows);
    }
    //SELECT name FROM sqlite_master WHERE type='table';

    //drop()
    //pragm()
    /*insertCliente('aa', 'aa', 123, 'ewq', 'nuh');*/

    select()

    //tables()
    
}

main();