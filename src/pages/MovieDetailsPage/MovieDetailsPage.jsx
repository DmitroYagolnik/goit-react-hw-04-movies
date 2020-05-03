import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import MainMovieInformation from '../../components/MainMovieInformation/MainMovieInformation';
import DataSection from '../../components/DataSection/DataSection';
import LinksSection from '../../components/LinksSection/LinksSection';
import routes from '../../servises/routes';
import { movieInformationAPI } from '../../servises/api';
import { mapperMovieData } from '../../servises/mapper';

const Cast = lazy(() => import('../../containers/Cast/Cast'));
const Reviews = lazy(() => import('../../containers/Reviews/Reviews'));

class MovieDetailsPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };

  state = {
    data: null,
    errorMessage: '',
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    movieInformationAPI(movieId)
      .then(({ data }) => {
        this.setState({
          data: mapperMovieData(data),
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { data, errorMessage } = this.state;
    const { match } = this.props;
    const { movieId } = match.params;
    return (
      <>
        <ButtonComponent
          handleButton={this.handleGoBack}
          buttonTitle="&#8617; Go back"
        />
        {(data || errorMessage) && (
          <DataSection errorMessage={errorMessage}>
            <MainMovieInformation movieData={data} />
          </DataSection>
        )}
        <LinksSection title="Additional information" movieId={movieId} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={routes.MOVIE_CAST} component={Cast} />
            <Route path={routes.MOVIE_REVIEWS} component={Reviews} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
export default MovieDetailsPage;
