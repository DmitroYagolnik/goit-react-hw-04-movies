import React from 'react';
import PropTypes from 'prop-types';
import style from './ErrorComponent.module.scss';

const ErrorComponent = ({ errorMessage }) => (
  <h3 className={style.ErrorComponentTitle}>
    Whoops, something went wrong: {errorMessage}
  </h3>
);

ErrorComponent.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorComponent;
