//crie uma funcao filtrarPorPalavraChave que recebe um array de objetos 
//e uma palavra-chave. Utilize a funcao filter para criar um array contendo 
//apenas os produtos cujo o nome contenha a palavra-chave.

function filtrarPorPalavraChave(itens, palavraChave) {
    return itens.filter(item => item.nome.toLowerCase().includes(palavraChave.toLowerCase()));
  }

  const itens = [
    { nome: "Livro", preco: 50 },
    { nome: "Caneta", preco: 10 },
    { nome: "Caderno", preco: 20 }
  ];
  
  const itensFiltrados = filtrarPorPalavraChave(itens, "ca");
  console.log(itensFiltrados);
