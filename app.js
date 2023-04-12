const button = document.querySelector("button");
let pokedex = [];
let pokemonInput = document.querySelector("#pokemon-input-name");
let pokemonCards = document.querySelector(".cards");

const getPokeData = () => {
  const promises = [];

  for (let i = 1; i <= 140; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((response) => response.json()));
  }

  Promise.all(promises).then((results) => {
    const pokemon = results.map((data) => ({      
     name: data.name,
      id: data.id,
      img: data.sprites["front_default"],
      type: data.types.map((type) => type.type.name).join(", "),
    }
    ));
    
    displayPokemon(pokemon);
  });
};

const displayPokemon = (pokemon) => {
  console.log(pokemon);
  const pokemonCardHTML = pokemon.map(poke => `
  <div class="card">
    <div class="img-poke"><img src="${poke.img}" alt="${poke.name}"></div>
    <div class="name-poke">${poke.name}</div>
    <div class="id-poke">${poke.id}</div>
    <div class="type-poke">${poke.type}</div>
  </div>
  `).join("")
  pokemonCards.innerHTML = pokemonCardHTML;
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

//     Promise.all()
//       .then((response) => {response.json();})
//       .then((data) => {
//         const pokemon = {

//         };
//         console.log(pokemon);
//       })
//       .catch((err) => {
//         console.log("fetch error found!");
//       });
//   }
// };
