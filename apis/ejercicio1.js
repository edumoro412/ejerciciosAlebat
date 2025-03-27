async function fetchApiPokemon(params) {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const response = await data.json();
  return response;
}

fetchApiPokemon();
