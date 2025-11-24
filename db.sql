CREATE TABLE agendamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente VARCHAR(100),
  telefone VARCHAR(20),
  servico VARCHAR(50),
  profissional VARCHAR(50),
  data DATE,
  hora TIME,
  observacoes TEXT
);