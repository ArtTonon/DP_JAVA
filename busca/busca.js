//utilizando Dom e filter, crie uma lista de nomes exiba no html, 
//crie uma barra de busca que em tempo real mostre os nomes mais 
//proximo do que se está sendo pesquisado, ou todos se não estiver nada na pesquisa

document.addEventListener("DOMContentLoaded", function() {
    const listaNomes = [
        "João",
        "Maria",
        "Pedro",
        "Ana",
        "Carlos",
        "Julia",
        "Lucas",
        "Camila"
    ];

    const buscaInput = document.getElementById("busca");
    const listaNomesUl = document.getElementById("listaNomes");

    // Função para renderizar a lista de nomes
    function renderizarLista(nomes) {
        listaNomesUl.innerHTML = "";
        nomes.forEach(function(nome) {
            const li = document.createElement("li");
            li.textContent = nome;
            listaNomesUl.appendChild(li);
        });
    }

    // Função para filtrar os nomes conforme a busca
    function filtrarNomes(busca) {
        return listaNomes.filter(function(nome) {
            return nome.toLowerCase().includes(busca.toLowerCase());
        });
    }

    // Evento de input para a barra de busca
    buscaInput.addEventListener("input", function(event) {
        const busca = event.target.value.trim();
        const nomesFiltrados = busca ? filtrarNomes(busca) : listaNomes;
        renderizarLista(nomesFiltrados);
    });

    // Renderiza a lista inicialmente
    renderizarLista(listaNomes);
});