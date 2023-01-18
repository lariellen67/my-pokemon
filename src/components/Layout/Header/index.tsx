import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { ThemeContext } from 'styled-components';

import logo from '../../../assets/pokeball-minimalist.png';
import {
  Container,
  LeftContent,
  Touchable,
  Logo,
  RightContent,
  Menu,
  Item,
} from './styles';

function Header() {
  const { palette } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <Container>
      <LeftContent>
        <Touchable onClick={() => navigate('/')}>
          <Logo src={logo} />
        </Touchable>
      </LeftContent>
      <RightContent>
        <Menu>
          <Item>
            <Link to="/">
              <span>Home</span>
            </Link>
          </Item>
          <Item>
            <Link to="/favorites">
              <span>Favorites</span>
            </Link>
          </Item>
        </Menu>
        <Button
          className="add-button"
          style={{
            backgroundColor: palette.GENERAL.PRIMARY,
            color: palette.GENERAL.SECONDARY,
          }}
          onClick={() => navigate('/surprise')}
        >
          Surprise Me
        </Button>
      </RightContent>
    </Container>
  );
}

export { Header };
