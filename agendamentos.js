import { DataTypes } from "sequelize";
import db from "./db.js";

const Agendamento = db.define("agendamentos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  servico: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  barbeiro: {
    type: DataTypes.STRING(100),
    allowNull: false
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
