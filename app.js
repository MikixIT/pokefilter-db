const button = document.querySelector("button");
const pokemonCount = 151;
let pokemonInput = document.querySelector("#pokemon-name");

//obj pokemon
let pokemon = {
  name: "charmander",
  id: 4,
  type: "fire",
  weight: 8,
  height: 6,
};

//making database all pokèmon

window.onload = {};

//Get Pokè Data from API by name.
const getPokeData = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });
};

button.addEventListener("click", getPokeData);
