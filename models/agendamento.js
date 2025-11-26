// models/Agendamento.js
import { DataTypes } from "sequelize";
import db from "../db.js";

const Agendamento = db.define("agendamentos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  servico: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  barbeiro: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  horario: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  observacoes: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: "agendamentos",
  timestamps: false
});

export default Agendamento;
