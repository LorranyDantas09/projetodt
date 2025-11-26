CREATE TABLE IF NOT EXISTS agendamentos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  telefone VARCHAR(20),
  servico VARCHAR(100) NOT NULL,
  barbeiro VARCHAR(100),
  data DATE NOT NULL,
  horario VARCHAR(10) NOT NULL,
  observacoes TEXT
);
