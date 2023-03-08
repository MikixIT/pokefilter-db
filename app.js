let pokemon = document.querySelector("#pokemon-name");
const button = document.querySelector("button");

//Get Pokè Data from API.
const getPokeData = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });
};

button.addEventListener("click", getPokeData);
