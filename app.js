const button = document.querySelector("button");
let pokedex = [];
let pokemon = {};
let pokemonInput = document.querySelector("#pokemon-input-name");

//get data from api

getPokeData = () => {
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const pokemon = {
          name: data.name,
          id: data.id,
          img: data.sprites.front_default,
          type: data.types.map((type) => type.type.name).join(", "),
        };
        console.log(pokemon);
      })
      .catch((err) => {
        console.log("fetch error found!");
      });
  }
};

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
