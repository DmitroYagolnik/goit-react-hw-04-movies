import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LinkItem = ({ option }) => {
  return <Link to={option.link}>{option.title}</Link>;
};

LinkItem.propTypes = {
  option: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkItem;
