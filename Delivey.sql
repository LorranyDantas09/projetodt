use Delícia_Express;

alter table cliente add column id_pedido int(6) not null;

create table entregador(
id int(4) primary key not null auto_increment,
id_pedido int(4) not null,
nome varchar(30) not null,
telefone int(11) not null,
placa_veículo varchar(10)
);

alter table entregador add constraint fk_id_pedido foreign key (id_pedido) references pedido(id_pedido);

create table entrega(
id int(4) primary key not null auto_increment,
id_cliente int(4) not null,
id_entregador int(4) not null,
horário_saída time,
horário_entrega time
);

alter table entrega add constraint fk_id_entregador foreign key (id_entregador) references entregador(id);