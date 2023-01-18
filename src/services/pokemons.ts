import api from './api';

export async function getPokemonsList() {
  const list = [];
  for (let i = 1; i <= 120; i++) {
    const response = await api.get(`/pokemon/${i}`);
    list.push({
      number: response.data.id,
      name: response.data.name,
      weight: response.data.weight,
      height: response.data.height,
      type: response.data.types[0].type.name,
      image: response.data.sprites.front_default,
    });
  }
  return list;
}
