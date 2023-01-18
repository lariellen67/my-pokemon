import logo from '../../assets/pokeball-minimalist.png';
import {
  Container,
  Picture,
  Content,
  Wrapper,
  Logo,
  Name,
  Number,
} from './styles';

interface ILabel {
  number: number;
  name: string;
  picture: any;
}

function Label({ number, name, picture }: ILabel) {
  return (
    <Container>
      <Picture src={picture} />
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

export { Label };
