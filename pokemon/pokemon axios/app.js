const fetchPokemonData = async (pokemonUrl) => {
  const response = await fetch(pokemonUrl);
  const pokemonData = await response.json();
  return pokemonData;
}

const fetchPokemonList = async (limit = 10) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const pokemonList = await response.json();
  return pokemonList.results;
}

const createPokemonCard = (pokemonData) => {
  const pokemonContainer = document.getElementById('pokemon-container');
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon-card');

  const pokeName = document.createElement('h3');
  pokeName.innerText = pokemonData.name;
  pokemonCard.appendChild(pokeName);

  const pokeNumber = document.createElement('p');
  pokeNumber.innerText = `#${pokemonData.id}`;
  pokemonCard.appendChild(pokeNumber);

  const pokeTypes = document.createElement('ul');
  pokemonData.types.forEach((type) => {
    const typeLi = document.createElement('li');
    typeLi.innerText = type.type.name;
    pokeTypes.appendChild(typeLi);
  });
  pokemonCard.appendChild(pokeTypes);

  const pokeImage = document.createElement('img');
  pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokemonData.id}.png`;
  pokemonCard.appendChild(pokeImage);

  pokemonContainer.appendChild(pokemonCard);
}

const fetchAndRenderPokemonList = async () => {
  const pokemonList = await fetchPokemonList();
  pokemonList.forEach(async (pokemon) => {
    const pokemonData = await fetchPokemonData(pokemon.url);
    createPokemonCard(pokemonData);
  });
}

fetchAndRenderPokemonList();