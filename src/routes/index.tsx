import { Route, Routes as Router } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Content } from '../components/Layout/Content';
import { Details } from '../pages/Details';
import { Favorites } from '../pages/Favorites';
import { Main } from '../pages/Main';
import { Surprise } from '../pages/Surprise';

function Routes() {
  return (
    <Router>
      <Route
        element={
          <Layout>
            <Content />
          </Layout>
        }
      >
        <Route path="/" element={<Main />} />
        <Route path="/details/:pokemonId" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/surprise" element={<Surprise />} />
      </Route>
    </Router>
  );
}

export default Routes;
