create database Mercadinho;

create table Cliente(
codCliente int(4) primary key not null auto_increment,
cepCliente int(8) not null,
nome varchar(30) not null,
telefone int(11) not null
);
alter table Pedido_Produto
add constraint fk_cod_Pedido
foreign key (cod_Pedido)
references Pedido(codPedido);