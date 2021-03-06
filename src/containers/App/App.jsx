import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import routes from '../../servises/routes';
import '../../index.css';

const Home = lazy(() => import('../../pages/HomePage/HomePage'));
const Movies = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage'),
);

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={routes.HOME} component={Home} />
            <Route exact path={routes.MOVIES} component={Movies} />
            <Route path={routes.MOVIE_DETAILS} component={MovieDetails} />
            <Redirect to={routes.HOME} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
