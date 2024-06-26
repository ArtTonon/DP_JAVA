//crie uma função que recebe uma lista e ordene ela

function ordenarLista(lista) {
    return lista.sort(function(a, b) {
        return a - b;
    });
}

let lista = [5, 2, 8, 1, 3];
console.log("Lista original:", lista);
console.log("Lista ordenada:", ordenarLista(lista));