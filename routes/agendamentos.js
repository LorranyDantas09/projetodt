// routes/agendamentos.js
import express from "express";
import Agendamento from "./models/Agendamento.js";

const router = express.Router();

// Criar
router.post("/", async (req, res) => {
  try {
    const novo = await Agendamento.create(req.body);
    return res.status(201).json(novo);
  } catch (err) {
    return res.status(400).json({ erro: err.message });
  }
});

// Listar
router.get("/", async (req, res) => {
  try {
    const lista = await Agendamento.findAll({ order: [["data", "ASC"], ["horario", "ASC"]] });
    return res.json(lista);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});

// Atualizar (parcial)
router.patch("/:id", async (req, res) => {
  try {
    await Agendamento.update(req.body, { where: { id: req.params.id } });
    return res.json({ mensagem: "Atualizado" });
  } catch (err) {
    return res.status(400).json({ erro: err.message });
  }
});

// Deletar
router.delete("/:id", async (req, res) => {
  try {
    await Agendamento.destroy({ where: { id: req.params.id } });
    return res.json({ mensagem: "Deletado" });
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});

export default router;
