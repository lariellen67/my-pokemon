import { Divider, Button } from 'semantic-ui-react';

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
  const pokemonType = type || '';
  return (
    <Container>
      <ButtonContainer>
        <Button circular icon="heart" />
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
