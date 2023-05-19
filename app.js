const button = document.querySelector("button");
let pokedex = [];
const pokemonInput = document.querySelector("#pokemon-input-name");
const pokemonCards = document.querySelector(".cards");
const darkModeButton = document.querySelector(".dark-mode-button");

//Types Pokemon (If u have a better solution for loop this variables, let me know 🤯)

const fire = "fire"
const fireButton = document.querySelector("#fire");
const water = "water";
const waterButton = document.querySelector("#water");
const grass = "grass";
const normal = "normal";
const normalButton = document.querySelector("#normal")
const grassButton = document.querySelector("#grass");
const flying = "flying";
const flyingButton = document.querySelector("#flying");
const fighting = "fighting";
const fightingButton = document.querySelector("#fighting");
const poison = "poison";
const poisonButton = document.querySelector("#poison");
const electric = "electric";
const electricButton = document.querySelector("#electric");
const ground = "ground";
const groundButton = document.querySelector("#ground");
const rock = "rock";
const rockButton = document.querySelector("#rock");
const psychic = "psychic";
const psychicButton = document.querySelector("#psychic");
const ice = "ice";
const iceButton = document.querySelector("#ice");
const bug = "bug";
const bugButton = document.querySelector("#bug");
const ghost = "ghost";
const ghostButton = document.querySelector("#ghost");
const steel = "steel";
const steelButton = document.querySelector("#steel");
const dragon = "dragon";
const dragonButton = document.querySelector("#dragon");
const dark = "dark";
const darkButton = document.querySelector("#dark");
const fairy = "fairy";
const fairyButton = document.querySelector("#fairy");

//


// Get Pokemon Data API with promises and map in a object array (pokedex)
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

//

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

//Filter and listener for Text Input

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
//


//Types EventListener => click

fireButton.addEventListener("click", () => typeFilterButton(fire));
waterButton.addEventListener("click", () => typeFilterButton(water));
normalButton.addEventListener("click", () => typeFilterButton(normal));
grassButton.addEventListener("click", () => typeFilterButton(grass));
flyingButton.addEventListener("click", () => typeFilterButton(flying));
fightingButton.addEventListener("click", () => typeFilterButton(fighting));
poisonButton.addEventListener("click", () => typeFilterButton(poison));
electricButton.addEventListener("click", () => typeFilterButton(electric));
groundButton.addEventListener("click", () => typeFilterButton(ground));
rockButton.addEventListener("click", () => typeFilterButton(rock));
psychicButton.addEventListener("click", () => typeFilterButton(psychic));
iceButton.addEventListener("click", () => typeFilterButton(ice));
bugButton.addEventListener("click", () => typeFilterButton(bug));
ghostButton.addEventListener("click", () => typeFilterButton(ghost))
steelButton.addEventListener("click", () => typeFilterButton(steel));
dragonButton.addEventListener("click", () => typeFilterButton(dragon));
darkButton.addEventListener("click", () => typeFilterButton(dark));
fairyButton.addEventListener("click", () => typeFilterButton(fairy));

//

//Types Filter Function
function typeFilterButton(type) {
    const pokemonTypeFiltred = pokedex.filter((poke) => {
      return (
        poke.types.toLowerCase().includes(type)
      );
    })
    displayCards(pokemonTypeFiltred);
  }

getPokeData();

//

//Dark Mode

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

//