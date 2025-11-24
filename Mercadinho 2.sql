use Mercadinho;
select
	P.nome as Nome_Produto,
    P.CodCategoria as Codigo_Pedido,
    P.DataPedido as Data_Pedido
from
	Cliente C
inner join
	Pedido P on C.CodCliente = P.Cod_Cliente
order by
	C.Nome;


select
    Prodt.nome as Nome_Produto,
    Prodt.valor as Valor_Unitario,
    Prodt.estoque as Quantidade_Estoque
from
    Produto Prodt
inner join
    Categoria Catga on Prodt.codCategoria = Catga.codCategoria
where
    Catga.nome = 'Limpeza';


select distinct
	C.nome as Nome_Cliente,
    C.telefone as telefone,
    concat (EC.logradouro, 'N°', EC.número, '-', EC.bairro, ', ', EC.cidade, '/', EC.estado) as Endereço_Completo
from
	Cliente C,
	endereço_cliente EC
inner join
	pedido P on C.codCliente = P.cod_Cliente
where
	P.dataPedido between '2020-04-01' and '2020-05-31';


select nome from produto where codCategoria = 13;


select nome, codCategoria from produto where estoque < 200;


select nome, valor, estoque, codCategoria from produto where valor > 10.0;


select
    C.nome as Nome_Cliente,
    C.telefone as Telefone,
    count(P.codPedido) as Numero_de_Pedidos
from
    Cliente C
inner join
    pedido P on C.codCliente = P.cod_Cliente
where
    P.dataPedido >= '2020-04-01' and P.dataPedido < '2020-05-01'
group by
    C.codCliente, C.nome, C.telefone
order by
    Numero_de_Pedidos desc;


select
    C.nome as Nome_Cliente,
    count(P.codPedido) as Total_Pedidos
from
    Cliente C
left join    
	pedido P on C.codCliente = P.cod_Cliente
group by
    C.codCliente, C.nome
order by
    Total_Pedidos desc;
    
select*from Cliente, pedido;