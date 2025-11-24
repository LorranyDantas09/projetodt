create database Delícia_Express;
use Delícia_Express;

create table cliente(
id int(4) primary key not null auto_increment,
endereço int(8) not null,
nome varchar(30) not null,
telefone int(11) not null,
email varchar(30) not null
);
alter table cliente add constraint fk_endereço foreign key (endereço) references endereço(cep);
select*from cliente;

create table endereço(
cep int(8) primary key not null,
rua varchar(30) not null,
número int(4) not null,
bairro varchar(30),
cidade varchar(30),
estado varchar(30)
);

create table produto(
idproduto int (5) not null auto_increment primary key,
nome varchar(30) not null,
descrição varchar (30) not null,
preço decimal (5) not null
);
 
create table pagamento(
idpagamento int(5) not null auto_increment primary key,
status varchar (30) not null,
forma decimal (10) not null
);


create table CategoriaProduto(
id_categoria INT primary key auto_increment,
nome varchar(100) not null,
descrição text
);
 
create table ItemPedido(
id_item INT primary key auto_increment,
quantidade int not null,
valor decimal(10,2)
);

CREATE TABLE IF NOT EXISTS pedido (
id_pedido INT(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,
id_cliente INT(4) NOT NULL,
data_hora DATETIME NOT NULL,
status ENUM('em preparo','saiu para entrega','entregue','cancelado') NOT NULL,
taxa_entrega DECIMAL(6,2) NOT NULL,
prazo_estimado TIME NOT NULL,
CONSTRAINT fk_pedido_cliente FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);
SELECT * FROM pedido;


create table entregador(

);

create table entrega(

);