const button = document.querySelector("button");

let pokemonInput = document.querySelector("#pokemon-input-name");

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

button.addEventListener("click", getPokeDataName);
