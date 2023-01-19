// Favorites screen, where all the pokemons you have favorited will appear
import cuid from 'cuid';
import { useNavigate } from 'react-router-dom';
import { Message } from 'semantic-ui-react';

import notfound from '../../assets/oops.png';
import { Label } from '../../components/Label';
import { Container, Content, NotFoundContainer, NotFound } from './styles';

function Favorites() {
  const navigate = useNavigate();

  const getItem: any = localStorage.getItem('favorites');
  // turn the localStorage content into json
  const data = JSON.parse(getItem);

  return (
    <Container>
      <Message>
        <Message.Header>You choosed me, so here I am!</Message.Header>
        <Message.List>
          <Message.Item>
            Here&apos;s the favorites page, all the pokémons you favorited on
            the details page will appear here.
          </Message.Item>
          <Message.Item>
            The max number of favorites pokemons is 20.
          </Message.Item>
          <Message.Item>
            At the moment we don&apos;t provide the option to unfavorite the
            pokémons, because as Antoine de Saint-Exupéry used to say &quot;You
            become responsible, forever, for what you have tamed.&quot; (The
            Little Prince).
          </Message.Item>
        </Message.List>
      </Message>
      {data ? (
        <Content>
          {data?.map((item: any) => {
            return (
              // here is possible to go to the details screen too
              <Label
                onClickLabel={() =>
                  navigate(`/details/${item.number}`, {
                    state: {
                      id: item.number,
                    },
                  })
                }
                key={cuid()}
                picture={item.image}
                number={item.number}
                name={item.name}
              />
            );
          })}
        </Content>
      ) : (
        // component showed when there's no pokemon favorite yet
        <NotFoundContainer>
          <NotFound src={notfound} />
        </NotFoundContainer>
      )}
    </Container>
  );
}

export { Favorites };
