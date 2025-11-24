create database Mercadinho;
use Mercadinho;

create table cliente(
codCliente int(4) primary key not null auto_increment,
cepCliente int(8) not null,
nome varchar(30) not null,
telefone int(11) not null
);
select*from cliente;


SELECT codCliente, nome FROM Cliente;
alter table cliente add constraint fk_cepCliente foreign key (cepCliente) references endereço_cliente(cep);
insert into cliente (codCliente, cepCliente, nome, telefone) values 
(default, '00000000', 'José João', '34999998798'),
(default, '11111111', 'Maria Joana', '31968579654'),
(default, '22222222', 'Patrícia Souza', '11998643658'),
(default, '33333333', 'Paulo Vitor', '42996485789');
select*from cliente;


create table endereço_cliente(
cep int(8) primary key not null,
logradouro varchar(50) not null,
número int(5) not null,
bairro varchar(30) not null,
cidade varchar(15) not null,
estado varchar(15) not null
);


select*from endereço_cliente;
drop table endereço_cliente;
insert into endereço_cliente (cep, logradouro, número, bairro, cidade, estado) values
('00000000','Rua das Flores', '00030', 'Veneza', 'Uberlândia', 'Minas Gerais'),
('11111111','Rua Montevideo', '00045', 'Bethânea', 'Uberlândia', 'Minas Gerais'),
('22222222','Av Hotência', '00548', 'Cid Nobre', 'Uberlândia', 'Minas Gerais'),
('33333333','Av Livramento', '00089', 'Veneza', 'Uberlândia', 'Minas Gerais');


create table categoria(
codCategoria int(4) primary key not null auto_increment,
nome varchar(30) not null
);


ALTER TABLE Categoria DROP FOREIGN KEY FK_codProduto0;
ALTER TABLE Categoria DROP COLUMN codProduto0;
insert into categoria (codCategoria, nome) values
(default, 'Limpeza'),
(default, 'Alimentos'),
(default, 'Doces'),
(default, 'Bebidas');
select*from categoria;


create table produto(
codProduto int(4) primary key not null auto_increment,
codCategoria int(4) not null,
nome varchar(30) not null,
estoque int not null,
valor float not null
);


insert into produto (codProduto, codCategoria, nome, estoque, valor) values 
(default, '13', 'Vanish', '500', '9.90'),
(default, '14', 'Bala de Hortelã', '200', '1.99'),
(default, '14', 'Coca Cola 2l', '800', '9.80'),
(default, '14', 'Pipoca docoe', '100', '4.99'),
(default, '13', 'Sabão em pó Omo', '200', '7.8'),
(default, '14', 'Macarrão Penna', '500', '4.95');
alter table produto add constraint fk_codCategoria foreign key (codCategoria) references Categoria(codCategoria);
select*from produto;


create table pedido(
codPedido int(4) primary key not null auto_increment,
cod_Cliente int(4) not null,
dataPedido date not null
);


insert into pedido (codPedido, cod_Cliente, dataPedido) values
(default, '5', '20200215'),
(default, '6', '20200105'),
(default, '7', '20200405'),
(default, '8', '20200501');
alter table pedido add constraint fk_cod_Cliente foreign key (cod_Cliente) references Cliente(codCliente);
select*from pedido;


create table pedido_produto(
id int(4) primary key not null auto_increment,
cod_Pedido int(4) not null,
cod_Produto int(4) not null,
qtdPrdoduto int(4) not null
);


alter table pedido_produto add constraint fk_cod_Pedido foreign key (cod_Pedido) references pedido(codPedido);
alter table pedido_produto add constraint fk_cod_Produto foreign key (cod_Produto) references produto(codProduto);
insert into pedido_produto (id, cod_Pedido, cod_Produto, qtdPrdoduto) values
(default, '25', '25', '1'),
(default, '26', '26', '2'),
(default, '25', '27', '1'),
(default, '25', '28', '1'),
(default, '25', '29', '1'),
(default, '25', '30', '1'),
(default, '28', '25', '5'),
(default, '26', '26', '2');
select*from pedido_produto;