use berçario;
create table mãe(
id int(4) primary key not null auto_increment,
nome varchar(30) not null,
telefone_f int(10),
telefone_c int(11) not null
);
alter table bebe add column id_mae int(4);
select*from bebe;
describe bebe;

alter table mãe add column signo varchar(10) not null;
describe mãe;

alter table mãe drop column signo;
describe mãe;

alter table bebe drop column id_mae;
describe bebe;

alter table bebe add column id_mae int(4) first;
describe bebe;

alter table bebe modify column peso float(3);
describe bebe;

alter table bebe modify column altura int(3);
describe bebe;

alter table bebe change column altura altura_cm int(3);
describe bebe;

alter table bebe rename to bebezinho;
describe bebezinho; 