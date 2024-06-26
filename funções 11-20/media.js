//crie uma função que receba uma lista e retorna a media dos valores dentro da lista

function media(lista){
    let soma = 0;
    for(let i = 0; i < lista.length; i++){
      soma += lista[i];
    }
    return soma/lista.length;
}  

console.log(media([1, 2, 3, 4, 5]));