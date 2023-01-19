import { useState } from 'react';
import { Divider } from 'semantic-ui-react';

import logo from '../../assets/pokeball-minimalist.png';
import { useColor } from '../../utils/useColor';
import {
  Container,
  ButtonContainer,
  Image,
  Wrapper,
  Logo,
  Name,
  Number,
  Info,
  Type,
  DividerText,
  Move,
  Touchable,
  Heart,
  HeartFilled,
} from './styles';

interface IRecord {
  image: any;
  name: string;
  number: number;
  height: number;
  weight: number;
  type: string;
  moveOne: string;
  moveTwo: string;
}

function Record({
  image,
  name,
  number,
  height,
  weight,
  type,
  moveOne,
  moveTwo,
}: IRecord) {
  const [favorited, setFavorited] = useState(false);
  const pokemonType = type || '';
  const favoritePokemon = {
    name,
    image,
    number,
  };

  function handleFavorite() {
    if (favorited) {
      setFavorited(true);
    } else {
      setFavorited(true);
      const a: any = localStorage.getItem('favorites');
      const getItem: any = JSON.parse(a);
      // verify if getItem is null, if it is set the first data on localStorage
      if (getItem === null) {
        localStorage.setItem('favorites', JSON.stringify([favoritePokemon]));
      } else {
        // if getItem is not null, will set a new favorite plus the information who's already there
        const b = [...getItem, favoritePokemon];
        // limits the number of favorites to 20
        if (b?.length <= 20) {
          localStorage.setItem('favorites', JSON.stringify(b));
        }
      }
    }
  }

  return (
    <Container>
      <ButtonContainer>
        <Touchable onClick={handleFavorite}>
          {favorited ? <HeartFilled /> : <Heart />}
        </Touchable>
      </ButtonContainer>
      <Image src={image} />
      <Wrapper>
        <Logo src={logo} />
        <Name>{name}</Name>
      </Wrapper>
      <Number>Order Number: {number}</Number>
      <Wrapper>
        <Info>Weight: {weight} kg</Info>
        <Info>Height: {height} m</Info>
        <Info>
          Type:
          <Type color={useColor(pokemonType)}>{type}</Type>
        </Info>
      </Wrapper>
      <Divider horizontal>
        <DividerText>Moves</DividerText>
      </Divider>
      <Move>{moveOne}</Move>
      <Move>{moveTwo}</Move>
    </Container>
  );
}

export { Record };
