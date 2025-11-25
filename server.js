import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import router from "./main.js";

dotenv.config({ path: "./variaveis.env" });

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Habilita CORS (permite que o front acesse o backend)
app.use(cors({
    origin: "*",  // em produção, pode trocar para o domínio da sua página
}));

// Middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // se você quiser servir o front pelo backend

// Rotas começando com /api
app.use("/api", router);

// Porta Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🔥 Servidor rodando na porta ${PORT}`);
});
