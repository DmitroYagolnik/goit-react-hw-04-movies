import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataSection from '../../components/DataSection/DataSection';
import { reviewsAPI } from '../../servises/api';
import { mapperReviews } from '../../servises/mapper';
import AdditionalInformation from '../../components/AdditionalInformation/AdditionalInformation';

class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };

  state = {
    reviews: [],
    errorMessage: '',
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    reviewsAPI(movieId)
      .then(({ data }) => {
        this.setState({
          reviews: mapperReviews(data.results),
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  render() {
    const { reviews, errorMessage } = this.state;
    return (
      <>
        {(reviews.length > 0 || errorMessage) && (
          <DataSection errorMessage={errorMessage}>
            <AdditionalInformation informationArr={reviews} />
          </DataSection>
        )}
      </>
    );
  }
}

export default Reviews;
