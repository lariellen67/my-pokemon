// Details screen, here will be shown one pokemon at time

import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import { Record } from '../../components/Record';
import { getPokemonById } from '../../services/details';
import { Container, Content } from './styles';

function Details() {
  const location = useLocation();
  const pokemonId = location.state.id;
  const [id, setId] = useState();

  useEffect(() => {
    setId(pokemonId);
  }, [pokemonId]);

  // call api using useQuery
  const { data } = useQuery(['pokemons', { id }], async () => {
    const response = await getPokemonById(pokemonId);
    return response;
  });

  return (
    <Container>
      <Content>
        {
          // the record component show on screen an image from pokemon and seven different informations about it
        }
        <Record
          image={data?.image}
          name={data?.name}
          number={data?.number}
          height={data?.height}
          weight={data?.weight}
          type={data?.type}
          moveOne={data?.moveOne}
          moveTwo={data?.moveTwo}
        />
      </Content>
    </Container>
  );
}

export { Details };
