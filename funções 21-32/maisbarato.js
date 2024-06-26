//crie uma funcao produtoMaisBarato que recebe um array de objetos e 
//utiliza a funcao reduce para encontrar e retornar o objeto representando o produto mais barato

const produtoMaisBarato = (arr, initialValue = { nome: null, preco: Infinity }) =>
  arr.reduce((acc, curr) => {
    if (curr.preco < acc.preco) {
      return curr;
    } else {
      return acc;
    }
  }, initialValue);

const produtos = [
  { nome: "Livro", preco: 50.5 },
    { nome: "Caneta", preco: 10.25 },
    { nome: "Caderno", preco: 20.75 },
  ];

console.log(produtoMaisBarato(produtos));
