//crie uma funcao dobrarPrecos que recebe um array de objetos e 
//utiliza a funcao map para cirar um array onde cada preco é duplicado

function dobrarPrecos(itens) {
    return itens.map(item => {
      return { ...item, preco: item.preco * 2 };
  });
}

const itens = [
    { nome: "Livro", preco: 20 },
    { nome: "Caneta", preco: 5 },
    { nome: "Caderno", preco: 10 },
];
  
  const itensDobrados = dobrarPrecos(itens);
  console.log(itensDobrados);
