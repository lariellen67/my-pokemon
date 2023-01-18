import api from './api';

export async function getPokemonById(id: any) {
  const response = await api.get(`/pokemon/${id}`);
  const pokemonDetails = {
    number: response.data.id,
    name: response.data.name,
    weight: response.data.weight,
    height: response.data.height,
    type: response.data.types[0].type.name,
    moveOne: response.data.moves[0].move.name,
    moveTwo: response.data.moves[1].move.name,
    image: response.data.sprites.front_default,
  };
  return pokemonDetails;
}
