//crie uma funcao aplicarDescontos que recebe um array de objetos e 
//utiliza a funcao map para criar um array onde cada preco é reduzido em 15%

function aplicarDescontos(itens) {
    return itens.map(item => {
      item.preco = item.preco * 0.85;
      return item;
    });
  }

  const itens = [
    { nome: "Livro", preco: 50 },
    { nome: "Caneta", preco: 10 },
    { nome: "Caderno", preco: 20 }
  ];
  console.log(aplicarDescontos(itens))