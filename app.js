const button = document.querySelector("button");
const pokemonStartNum = 171;
const pokemonImages = document.querySelectorAll(".img-poke");
const pokemonNames = document.querySelectorAll(".name-poke");
const pokemonID = document.querySelectorAll(".id-poke");
let pokemon = document.querySelectorAll("card");
let pokemonInput = document.querySelector("#pokemon-input-name");

//obj pokemon
let pokemons = {}; // formatting like -> {1 : {"name" : "charmander", "pic" : #, "type" : ["fire"], "info" : "..."} }

window.onload = async () => {
  // getPokeData(1);
  for (let i = 1; i <= pokemonStartNum; i++) {
    await getPokeData(i);
    pokemon.id;
    console.log(pokemon.id);
  }

  // console.log(pokemons);
};

//making database all pokèmon
const getPokeData = async (num) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${num.toString()}`;
  let res = await fetch(url);
  let pokemons = await res.json();
  // console.log(pokemons);

  let pokemonName = pokemons["name"];
  let pokemonType = pokemons["types"];
  let pokemonImg = pokemons["sprites"]["other"]["dream_world"]["front_default"];

  res = await fetch(pokemons["species"]["url"]);
  let pokemonInfo = await res.json();

  // console.log(pokemonInfo);
  pokemonInfo = pokemonInfo["flavor_text_entries"]["9"]["flavor_text"];
  pokemons[num] = {
    name: pokemonName,
    pic: pokemonImg,
    types: pokemonType,
    info: pokemonInfo,
  };
};

//Get Pokè Data from API by name.
const getPokeDataName = () => {
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
