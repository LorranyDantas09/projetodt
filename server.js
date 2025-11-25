import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import router from "./main.js";

dotenv.config({ path: "./variaveis.env" });

const app = express();

// Caminhos corretos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS liberado
app.use(cors({ origin: "*" }));

// Middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// 🔥 SERVIR O FRONT END
app.use(express.static(path.join(__dirname, "public")));

// 🔥 Rotas da API
app.use("/api", router);

// 🔥 Se nenhuma rota combinar → envia o index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Render usa esta porta automaticamente
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
