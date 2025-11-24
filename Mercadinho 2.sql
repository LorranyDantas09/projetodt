use Mercadinho;
select P.nome as Nome_Produto, P.CodCategoria as Codigo_Pedido, P.DataPedido as Data_Pedido
from Cliente C
inner join Pedido P on C.CodCliente = P.Cod_Cliente
order by C.Nome;


select Prodt.nome as Nome_Produto, Prodt.valor as Valor_Unitario, Prodt.estoque as Quantidade_Estoque
from Produto Prodt
inner join Categoria Cat on Prodt.codCategoria = Cat.codCategoria
where Cat.nome = 'Limpeza';


select distinct C.nome as Nome_Cliente, C.telefone as Telefone, 
concat(C.logradouro, ', n°', C.numero, '-', C.bairro, ',', C.cidade, '/', C.estado) as Endereço_Completo
from Cliente C
inner join pedido P on C.codCliente = P.cod_Cliente
where P.dataPedido between '2020-04-01' and '2020-05-31';

select cliente.nome, cliente.telefone, cliente.logradouro, cliente.numero, cliente.bairro, cliente.cidade, cliente.estado
from cliente
inner join pedido
on cliente.codCliente = pedido.cod_Cliente
where pedido.dataPedido between '2020-04-01' and '2020-05-31';


select nome from produto where codCategoria = 13;


select produto.nome, categoria.nome 
from produto
inner join categoria
on produto.cod_categoria = cod_categoria
where produto.estoque < 200;


select nome, valor, estoque, codCategoria from produto where valor > 10.0;


select C.nome as Nome_Cliente, C.telefone as Telefone, count(P.codPedido) as Numero_de_Pedidos
from Cliente C
inner join pedido P on C.codCliente = P.cod_Cliente
where P.dataPedido >= '2020-04-01' and P.dataPedido < '2020-05-01'
group by C.codCliente, C.nome, C.telefone
order by Numero_de_Pedidos desc;


select C.nome as Nome_Cliente, count(P.codPedido) as Total_Pedidos
from Cliente C
left join pedido P on C.codCliente = P.cod_Cliente
group by C.codCliente, C.nome
order by Total_Pedidos desc;


select sum(p.estoque) as totalEstoque
from produto
inner join c.categoria on p.codCategoria = c.codCategoria
where c.nome = 'Alimentos';


select sum(PR.estoque) as Soma_Estoque_Alimentos
from Produto PR
inner join Categoria CAT on PR.codCategoria = CAT.codCategoria
where CAT.nome = 'Alimentos';
