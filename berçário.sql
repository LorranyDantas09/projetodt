use berçario;
create table bebe(
id int(4) primary key auto_increment not null,
nome varchar(30) not null,
peso int(3),
altura float(3)
);

insert into bebe values (id, nome, peso, altura),
(default, 'Clementino de Jesus', '6702', '1651');