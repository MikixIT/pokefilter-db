const button = document.querySelector("button");
let pokedex = [];
let pokemonInput = document.querySelector("#pokemon-input-name");
let pokemonCards = document.querySelector(".cards");

const getPokeData = () => {
  const promises = [];

  for (let i = 1; i <= 140; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((response) => response.json()));
  }

  Promise.all(promises).then((results) => {
    const pokemon = results.map((data) => ({
      name: data.name,
      id: data.id,
      img: data.sprites["front_default"],
      types: data.types.map((type) => type.type.name).join(", "),
    }));

    displayCards(pokemon);
  });
};

const displayCards = (pokemon) => {
  const pokemonCardHTML = pokemon
    .map((poke) => {
      return `
  <div class="card">
    <div class="img-poke"><img src="${poke.img}" alt="${poke.name}"></div>
    <div class="name-poke">${poke.name}</div>
    <div class="id-poke">${poke.id}</div>
    <div class="type-poke">${poke.types}</div>
  </div>
  `;
    })
    .join("");
  pokemonCards.innerHTML = pokemonCardHTML;
  return (pokedex = pokemon);
};

pokemonInput.addEventListener("input", (e) => {
  // We are sure the input next is inside the -> "value" and in every single type refresh the value
  const value = e.target.value.toLowerCase();
  const pokedexFiltred = pokedex.filter((poke) => {
    return (poke.name.includes(value) || poke.types.includes(value));
  });
  displayCards(pokedexFiltred);
  });

getPokeData();

