//faça uma funcao de filtro que recebe uma callback que filtre todos os impares

function filtroImpares(numeros) {
  return numeros.filter(function(numero) {
    return numero % 2 !== 0;
  });
}

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filtroImpares(numeros));