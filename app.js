const button = document.querySelector("button");
const pokemonNum = 151;
let pokemonInput = document.querySelector("#pokemon-name");

//obj pokemon
let pokemon = {}; //  {1 : {"name" : "charmander", "pic" : #, "type" : ["fire"], "info" : "..."} }

//making database all pokèmon

window.onload = async () => {
  getPokeData(1);
};

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
