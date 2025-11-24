import express from "express";

import dotenv from "dotenv";

dotenv.config({ path: "./variaveis.env" });

const router = express.Router();

// Conexão com banco
const db = postgres.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: "postgres",
  port: Number(process.env.DB_PORT),
  dialectOptions: {
    ssl:{
      reaquire: true, rejecUnauthorized: false}

  },
  logging: false
});

// Listar agendamentos
router.get("/agendamentos", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM agendamentos ORDER BY data, hora");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar agendamentos" });
  }
});

// Criar agendamento
router.post("/agendamentos", async (req, res) => {
  try {
    const { cliente, telefone, servico, profissional, data, hora, observacoes } = req.body;
    const sql = "INSERT INTO agendamentos (cliente, telefone, servico, profissional, data, hora, observacoes) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const [result] = await db.query(sql, [cliente, telefone, servico, profissional, data, hora, observacoes]);
    res.json({ message: "Agendamento criado", id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao criar agendamento" });
  }
});

// Editar agendamento
router.put("/agendamentos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { cliente, telefone, servico, profissional, data, hora, observacoes } = req.body;
    const sql = "UPDATE agendamentos SET cliente=?, telefone=?, servico=?, profissional=?, data=?, hora=?, observacoes=? WHERE id=?";
    await db.query(sql, [cliente, telefone, servico, profissional, data, hora, observacoes, id]);
    res.json({ message: "Agendamento atualizado" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao atualizar agendamento" });
  }
});

// Deletar agendamento
router.delete("/agendamentos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM agendamentos WHERE id=?", [id]);
    res.json({ message: "Agendamento excluído" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao excluir agendamento" });
  }
});

export default router;
