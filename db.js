import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, // <-- estava errado (DB_PASS)
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        port: Number(process.env.DB_PORT),
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        logging: false
    }
);

db.authenticate()
  .then(() => console.log("Conectado ao banco com sucesso"))
  .catch(err => console.log("Erro ao conectar ao banco: " + err));

export default db;
