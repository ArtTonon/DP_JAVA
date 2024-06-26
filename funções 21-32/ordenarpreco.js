//crie uma funcao ordenarPorPreco que recebe um array de objetos e 
//utiliza a funcao sort para retornar um novo array ordenado pelo preco, do menor para o maior

function ordenarPorPreco(produtos) {
  return produtos.sort((a, b) => a.preco - b.preco);
}

const produtos = [
  { nome: "Livro", preco: 50.5 },
  { nome: "Caneta", preco: 10.25 },
  { nome: "Caderno", preco: 20.75 },
];

const produtosOrdenados = ordenarPorPreco(produtos);
console.log(produtosOrdenados);