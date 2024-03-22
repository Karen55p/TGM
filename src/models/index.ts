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

    await db.run(`
        CREATE TABLE IF NOT EXISTS pedido (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            prazo DATE,
            material TEXT,
            altura FLOAT,
            largura FLOAT,
            comprimento FLOAT, 
            mobilia TEXT,
            sugest TEXT,
            id_cliente INTEGER,
            FOREIGN KEY (id_cliente) references cliente(id)
        );
    `);

    await db.run(`
            CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT,
                email TEXT,
                nivel TEXT,
                senha TEXT
            );
    `);

    const pragm = async () => {
    const rows = await db.all('pragma table_info(user)');
    console.log(rows);
    }

    const select = async () => {
        const rows = await db.all('select * from pedido');
        console.log(rows);
        }

    /*const drop = async () =>{
        await db.run(`
        DROP TABLE pedido;
        `);
    console.log('tabela deletada');
    };*/


    //drop()
    //pragm()
    /*insertCliente('aa', 'aa', 123, 'ewq', 'nuh');*/

    //select()
    
}

main();