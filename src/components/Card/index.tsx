import logo from '../../assets/pokeball-minimalist.png';
import {
  Container,
  Image,
  Content,
  Wrapper,
  Logo,
  Name,
  Number,
} from './styles';

interface ICard {
  number: number;
  name: string;
  image: any;
}

function Card({ number, name, image }: ICard) {
  return (
    <Container>
      <Image src={image} />
      <Content>
        <Wrapper>
          <Logo src={logo} />
          <Number># {number}</Number>
        </Wrapper>
        <Name>{name}</Name>
      </Content>
    </Container>
  );
}

export { Card };
