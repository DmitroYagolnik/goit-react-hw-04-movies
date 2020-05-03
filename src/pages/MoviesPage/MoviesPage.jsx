import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import LinksGallery from '../../components/LinksGallery/LinksGallery';
import DataSection from '../../components/DataSection/DataSection';
import { searchAPI } from '../../servises/api';
import { mapperMovies } from '../../servises/mapper';

class MoviesPage extends Component {
  state = {
    searchValue: '',
    moviesFound: [],
    errorMessage: '',
  };

  handleInput = event => {
    const { value } = event.target;
    this.setState({
      searchValue: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchValue } = this.state;

    searchAPI(searchValue)
      .then(({ data }) => {
        const { results } = data;
        if (results.length > 0) {
          this.setState({
            moviesFound: mapperMovies(results),
            errorMessage: '',
          });
        } else {
          this.setState({
            errorMessage: `Movies with the title ${searchValue} were not found!`,
          });
        }
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message,
        });
      })
      .finally(
        this.setState({
          searchValue: '',
        }),
      );
  };

  render() {
    const { searchValue, moviesFound, errorMessage } = this.state;
    return (
      <>
        <SearchBar
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          searchValue={searchValue}
        />
        <DataSection errorMessage={errorMessage}>
          <LinksGallery moviesArr={moviesFound} />
        </DataSection>
      </>
    );
  }
}

export default MoviesPage;
