const button = document.querySelector("button");
let pokedex = [];
let pokemon = {};
let pokemonInput = document.querySelector("#pokemon-input-name");

//get data from api

getPokeData = () => {
  const url = `https://pokeapi.co/api/v2/pokemon/1`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const pokemon = {};
      pokemon["name"] = data.name;
      pokemon["id"] = data.id;
      pokemon["img"] = data.sprites.front_default;
      pokemon["type"] = data.types.map((type) => type.type.name).join(", ");
      console.log(pokemon);
    })
    .catch((err) => {
      console.log("fetch error found!");
    });
};

//put on obj pokemon

//Get Pokè Data from API by name.
const getPokeDataByName = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });
};

window.onload = getPokeData();

button.addEventListener("click", getPokeDataByName);
