const button = document.querySelector("button");
const pokemonCount = 151;

//making database all pokèmon

// window.onload = {};

//Get Pokè Data from API by name.
const getPokeData = () => {
  fetch(`https://pokeapi.co/api/v2/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });
};

button.addEventListener("click", getPokeData);
