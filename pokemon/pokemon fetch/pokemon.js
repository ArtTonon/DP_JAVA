const output = document.getElementById("output");

const fetchPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const displayPokemon = (pokemon) => {
  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("pokemon");
  pokemonElement.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <h3>${pokemon.name}</h3>
  `;
  output.appendChild(pokemonElement);
};

const fetchPokemonList = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
  const response = await fetch(url);
  const data = await response.json();
  data.results.forEach(async (pokemon) => {
    const pokemonData = await fetchPokemonData(pokemon.url);
    displayPokemon(pokemonData);
  });
};

fetchPokemonList();