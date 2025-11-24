use berçario;
create table médico(
id int(4) primary key not null auto_increment,
nome varchar(30) not null,
CRM float(10),
telefone_c int(11)
);

insert into médico (id, nome, CRM, telefone_c) values (default, 'João Vitor', '012345678', '991594165');
insert into mãe (id, nome, telefone_f, telefone_c) values (default, 'Maria Aparecida', '32112510', '992020503');
insert into mãe (id, nome, telefone_f, telefone_c) values (default, 'Fernanda', '32156421', '999999999');
select*from bebe;
select*from mãe;
select*from médico;
select nome from mãe;
select CRM from médico;
select nome from bebe where peso > 5;
select nome, id, peso, altura from bebe order by nome desc;
select nome, id, CRM, telefone_c from médico order by nome desc;
select nome, id, telefone_f, telefone_c from Mãe order by nome asc;

alter table bebe
add constraint