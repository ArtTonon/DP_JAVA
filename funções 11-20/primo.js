//crie uma função que recebe um numero e retorne verdadeiro ou falso se o numero é um numero primo

function ehPrimo(numero){
    if(numero < 2){
      return false;
    }
    for(let i = 2; i < numero; i++){
      if(numero % i === 0){
        return false;
      }
    }
    return true;
  }

  const numero = 9;
  console.log(ehPrimo(numero));