// server.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import db from "./db.js";
import agendamentoRoutes from "./routes/agendamentos.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// API (use /api/agendamentos no frontend)
app.use("/api/agendamentos", agendamentoRoutes);

// Fallback: serve index (optional)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "serv.html"));
});

// start and sync DB
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await db.sync({ alter: true }); // ajusta esquema sem perder dados
    console.log("✅ DB sincronizado");
  } catch (err) {
    console.error("Erro ao sincronizar DB:", err);
  }
  console.log(`🔥 Servidor rodando na porta ${PORT}`);
});
