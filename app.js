const button = document.querySelector("button");
let pokedex = [];
let pokemonInput = document.querySelector("#pokemon-input-name");

const displayConsole = (obj) => {
  console.log(obj);
};

const getPokeData = () => {
  const promises = [];

  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((response) => response.json()));
  }

  Promise.all(promises).then((results) => {
    const pokemon = results.map((data) => ({
      name: data.name,
      id: data.id,
      img: data.sprites["front_default"],
      type: data.types.map((type) => type.type.name).join(", "),
    }));
    displayConsole(pokemon);
  });
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
