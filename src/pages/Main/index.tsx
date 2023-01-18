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

  const { data, isLoading } = useQuery(['pokemons'], async () => {
    const response = await getPokemonsList();
    return response;
  });

  const lenght: any = data?.length || [];

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  return isLoading ? (
    <LoadingContainer>
      <ReactLoading type="spin" color={palette.GENERAL.PRIMARY} />
    </LoadingContainer>
  ) : (
    <Container>
      {currentTableData?.map((item) => {
        return (
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
