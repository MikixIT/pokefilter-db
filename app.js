const button = document.querySelector("button");
let pokedex = [];
const pokemonInput = document.querySelector("#pokemon-input-name");
const pokemonCards = document.querySelector(".cards");
const darkModeButton = document.querySelector(".dark-mode-button");
const fire = "fire";

const getPokeData = () => {
  const promises = [];

  for (let i = 1; i <= 950; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((response) => response.json()));
  }

  Promise.all(promises).then((results) => {
    pokedex = results.map((data) => ({
      name: data.name,
      id: data.id,
      img: data.sprites["front_default"],
      types: data.types.map((type) => type.type.name).join(", "),
    }));

    displayCards(pokedex);
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
};

pokemonInput.addEventListener("input", (e) => {
  // We are sure the input next is inside the -> "value" and in every single type refresh the value
  const value = e.target.value.toLowerCase();
  const pokedexFiltred = pokedex.filter((poke) => {
    return (
      poke.name.toLowerCase().includes(value) ||
      poke.types.toLowerCase().includes(value)
    );
  });
  console.log(pokedexFiltred);
  displayCards(pokedexFiltred);
});




getPokeData();

darkModeButton.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkModeButton.innerHTML = "<button>🌞</button>";
    darkModeButton.classList = "dark-mode-button";
  } else {
    darkModeButton.innerHTML = "<button>🌙</button>";
    darkModeButton.classList = "dark-mode-button";
  }
};
