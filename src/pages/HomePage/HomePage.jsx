import React, { Component } from 'react';
import LinksGallery from '../../components/LinksGallery/LinksGallery';
import DataSection from '../../components/DataSection/DataSection';
import { trendingAPI } from '../../servises/api';
import { mapperMovies } from '../../servises/mapper';

class HomePage extends Component {
  state = {
    trendingMovie: [],
    errorMessage: '',
  };

  componentDidMount() {
    trendingAPI()
      .then(({ data }) => {
        this.setState({
          trendingMovie: mapperMovies(data.results),
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  render() {
    const { trendingMovie, errorMessage } = this.state;
    return (
      <>
        <DataSection title="Trending today" errorMessage={errorMessage}>
          <LinksGallery moviesArr={trendingMovie} />
        </DataSection>
      </>
    );
  }
}

export default HomePage;
