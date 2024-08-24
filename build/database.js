"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const DB_HOST = 'mysql.railway.internal';
const DB_USER = 'root';
const DB_PASSWORD = 'KoXLTnEWyZbDCXEUIDrntuHVodZwWvYg';
const DB_NAME = 'railway';
async function getConnection() {
    return await promise_1.default.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        connectionLimit: 10
    });
}
exports.getConnection = getConnection;
//# sourceMappingURL=database.js.map