import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataSection from '../../components/DataSection/DataSection';
import AdditionalInformation from '../../components/AdditionalInformation/AdditionalInformation';
import { castAPI } from '../../servises/api';
import { mapperCast } from '../../servises/mapper';

class Cast extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };

  state = {
    cast: [],
    errorMessage: '',
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    castAPI(movieId)
      .then(({ data }) => {
        this.setState({
          cast: mapperCast(data.cast),
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  render() {
    const { cast, errorMessage } = this.state;
    return (
      <>
        {(cast.length > 0 || errorMessage) && (
          <DataSection errorMessage={errorMessage}>
            <AdditionalInformation informationArr={cast} />
          </DataSection>
        )}
      </>
    );
  }
}

export default Cast;
