export const pokedex = document.getElementById("pokedex");
//fetching pokemon's name, image, type and id from pokeapi
const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 6; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const imgsArray = results.map((result) => ({
      image: result.sprites.other.home["front_default"],
      id: result.id,
    }));
    // console.log(pokemon);

    console.log(imgsArray);
    return imgsArray;
  });
};

fetchPokemon();
