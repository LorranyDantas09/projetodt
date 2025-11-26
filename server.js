import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import Agendamento from "./agendamentos.js";

const app = express();

// Configuração do caminho
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());

// Servir arquivos do public
app.use(express.static(path.join(__dirname, "public")));

// ROTAS

// Listar
app.get("/agendamentos", async (req, res) => {
  try {
    const ag = await Agendamento.findAll();
    res.json(ag);
  } catch (err) {
    res.status(500).send("Erro ao buscar agendamentos: " + err);
  }
});

// Criar
app.post("/agendamentos", async (req, res) => {
  try {
    await Agendamento.create(req.body);
    res.send("Agendamento criado com sucesso!");
  } catch (err) {
    res.status(500).send("Erro ao criar agendamento: " + err);
  }
});

// Editar
app.patch("/agendamentos/:id", async (req, res) => {
  try {
    await Agendamento.update(req.body, { where: { id: req.params.id } });
    res.send("Agendamento atualizado.");
  } catch (err) {
    res.status(500).send("Erro ao atualizar: " + err);
  }
});

// Deletar
app.delete("/agendamentos/:id", async (req, res) => {
  try {
    await Agendamento.destroy({ where: { id: req.params.id } });
    res.send("Agendamento deletado.");
  } catch (err) {
    res.status(500).send("Erro ao deletar: " + err);
  }
});

// Iniciar servidor
app.listen(3000, () => console.log("Rodando na porta 3000"));
