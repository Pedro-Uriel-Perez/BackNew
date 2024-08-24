import mysql from 'mysql2/promise';

const DB_HOST = 'mysql.railway.internal';
const DB_USER = 'root';
const DB_PASSWORD = 'KoXLTnEWyZbDCXEUIDrntuHVodZwWvYg';
const DB_NAME = 'railway';

export async function getConnection() {
    return await mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        connectionLimit: 10
    });
}
