export async function getPokemons () {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  const res = await response.json()
  return res.results
}

export async function getPokemon (name: String | undefined) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then(res => res.json())
  return {
    name,
    img: response.sprites.front_default,
  }
}