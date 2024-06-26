//crie uma funcao calcularTotal que recebe um array de objetos e 
//utiliza a funcao reduce para calcular e retornar o valor total do carrinho de compras

function calcularTotal(itens) {
    return itens.reduce((total, item) => total + item.preco, 0);
  }

  const itens = [
    { nome: "Livro", preco: 50 },
    { nome: "Caneta", preco: 10 },
    { nome: "Caderno", preco: 20 }
  ];
  
  const total = calcularTotal(itens);
  console.log(total);
