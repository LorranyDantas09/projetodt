import express from "express";
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config({ path: "./variaveis.env" });

const { Pool } = pkg;
const router = express.Router();

// Conexão PostgreSQL
const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  ssl: { rejectUnauthorized: false }
});

// Listar agendamentos
router.get("/agendamentos", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM agendamentos ORDER BY data, hora"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar agendamentos" });
  }
});

// Criar agendamento
router.post("/agendamentos", async (req, res) => {
  try {
    const { cliente, telefone, servico, profissional, data, hora, observacoes } =
      req.body;

    const sql = `
      INSERT INTO agendamentos 
      (cliente, telefone, servico, profissional, data, hora, observacoes)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `;

    const result = await db.query(sql, [
      cliente,
      telefone,
      servico,
      profissional,
      data,
      hora,
      observacoes
    ]);

    res.json({ message: "Agendamento criado", id: result.rows[0].id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao criar agendamento" });
  }
});

// Editar agendamento
router.put("/agendamentos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { cliente, telefone, servico, profissional, data, hora, observacoes } =
      req.body;

    const sql = `
      UPDATE agendamentos
      SET cliente=$1, telefone=$2, servico=$3, profissional=$4, data=$5, hora=$6, observacoes=$7
      WHERE id=$8
    `;

    await db.query(sql, [
      cliente,
      telefone,
      servico,
      profissional,
      data,
      hora,
      observacoes,
      id
    ]);

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

    await db.query("DELETE FROM agendamentos WHERE id=$1", [id]);

    res.json({ message: "Agendamento excluído" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao excluir agendamento" });
  }
});

export default router;
