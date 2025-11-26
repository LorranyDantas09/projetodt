DROP TABLE IF EXISTS agendamentos;

CREATE TABLE agendamentos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  servico VARCHAR(100) NOT NULL,
  barbeiro VARCHAR(100) NOT NULL,
  data DATE NOT NULL,
  horario VARCHAR(10) NOT NULL,
  observacoes TEXT
);
