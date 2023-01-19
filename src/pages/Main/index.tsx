// Main screen, where the magic happens, here all the pokemons are listed, 20 for each page
import cuid from 'cuid';
import { useMemo, useState, useContext } from 'react';
import ReactLoading from 'react-loading';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { Label } from '../../components/Label';
import { Pagination } from '../../components/Pagination';
import { getPokemonsList } from '../../services/pokemons';
import { Container, LoadingContainer } from './styles';

function Main() {
  const pageSize = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const { palette } = useContext(ThemeContext);
  const navigate = useNavigate();

  // call api using useQuery
  const { data, isLoading } = useQuery(['pokemons'], async () => {
    const response = await getPokemonsList();
    return response;
  });

  const lenght: any = data?.length || [];

  // function to control the number of pokemons on each page
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  return isLoading ? (
    // this component is presented on screen, while the api's still bringing the data
    <LoadingContainer>
      <ReactLoading type="spin" color={palette.GENERAL.PRIMARY} />
    </LoadingContainer>
  ) : (
    <Container>
      {currentTableData?.map((item) => {
        return (
          <Label
            onClickLabel={() =>
              // when the pokemon label is clicked, the application will redirect you to the details page
              navigate(`/details/${item.number}`, {
                state: {
                  id: item.number,
                },
              })
            }
            // cuid generate an unique hash, it can be used as a key of the component
            key={cuid()}
            picture={item.image}
            number={item.number}
            name={item.name}
          />
        );
      })}
      {
        // the pagination component, allow the user to see the other pages with more pokemons listed
      }
      <Pagination
        currentPage={currentPage}
        totalCount={lenght}
        pageSize={pageSize}
        onPageChange={(page: any) => setCurrentPage(page)}
      />
    </Container>
  );
}

export { Main };
