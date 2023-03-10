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
  onClickLabel: any;
}

function Label({ number, name, picture, onClickLabel }: ILabel) {
  return (
    <Container onClick={onClickLabel}>
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
