create database spa;

create table operadoras(codigo int(5) not null,nome varchar(50) null,categoria varchar(50) null,preco numeric(18,2) null);

insert into operadoras(codigo,nome,categoria,preco) values (14,'Oi','Celular',2);
insert into operadoras(codigo,nome,categoria,preco) values (15,'Vivo','Celular',1);
insert into operadoras(codigo,nome,categoria,preco) values (41,'Tim','Celular',3);
insert into operadoras(codigo,nome,categoria,preco) values (25,'GVT','Fixo',1);
insert into operadoras(codigo,nome,categoria,preco) values (21,'Embratel','Fixo',2);

create table contatos(id int(5) not null auto_increment, nome varchar(100) null,telefone varchar(20) null, data datetime,codigo int(5) null, primary key(id));

insert into contatos(nome,telefone,data,codigo) values ('Bruno','99999-2222','1970-01-05',14);
insert into contatos(nome,telefone,data,codigo) values ('Sandra','99999-3333','1970-01-05',15);
insert into contatos(nome,telefone,data,codigo) values ('Mariana','99999-8952','1970-01-05',41);