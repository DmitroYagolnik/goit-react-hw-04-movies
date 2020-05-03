import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = ({ handleButton, buttonTitle }) => {
  return (
    <button type="button" onClick={handleButton}>
      {buttonTitle}
    </button>
  );
};

ButtonComponent.propTypes = {
  handleButton: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

export default ButtonComponent;
