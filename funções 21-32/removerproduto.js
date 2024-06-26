//crie uma funcao removerProdutoPorNome que recebe um array de objetos 
//e o nome de um produto. Utilize a funcao filter para criar um array sem o produto com o nome fornecido

function removerProdutoPorNome(produtos, nomeDoProduto) {
  return produtos.filter(produto => produto.nome !== nomeDoProduto);
}

  const produtos = [
    { nome: "Livro", preco: 50 },
    { nome: "Caneta", preco: 10 },
    { nome: "Caderno", preco: 20 }
  ];
  
  const novosProdutos = removerProdutoPorNome(produtos, 'Caneta');
  console.log(novosProdutos);