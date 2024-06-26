//crie uma função que receba no parâmetro um número e retorne se é verdadeiro ou falso

function verificar(numero){
    if(numero > 0){
      return true
    }else{
      return false
    }
  }

  const numero = 3;
  console.log(verificar(numero));