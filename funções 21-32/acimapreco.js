//crie uma funcao produtosAcimaDePreco que recebe um array de objetos e 
//um valor de preco. Utilize a funcao filter para criar um array contendo 
//apenas os produtos com preco acima do valor fornecido

function produtosAcimaDePreco(itens, preco) {
  return itens.filter(function(item) {
    return item.preco > preco;
  });
}
  const itens = [
    { nome: "Livro", preco: 50 },
    { nome: "Caneta", preco: 10 },
    { nome: "Caderno", preco: 20 },
    { nome: "Notebook", preco: 1000 }
  ];
  
  const preco = 50;
  console.log(produtosAcimaDePreco(itens, preco));
