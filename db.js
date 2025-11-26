// db.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: Number(process.env.DB_PORT) || 5432,
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
  .then(() => console.log("✅ Banco conectado"))
  .catch(err => console.error("❌ Erro banco:", err));

export default db;
