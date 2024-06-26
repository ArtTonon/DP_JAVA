//crie uma funcao precosFormatados que recebe um array de objetos e 
//utiliza a funcao map para criar um array de strings formatadas 
//indicando o nome do produto e seu preco, por exemplo,"Camiseta:R$20.00"

function precosFormatados(produtos) {
  return produtos.map(function(produto) {
    return `${produto.nome}: R$${produto.preco.toFixed(2)}`;
  });
}

  const produtos = [
    { nome: "Livro", preco: 50.5 },
    { nome: "Caneta", preco: 10.25 },
    { nome: "Caderno", preco: 20.75 }
  ];

  console.log(precosFormatados(produtos));
