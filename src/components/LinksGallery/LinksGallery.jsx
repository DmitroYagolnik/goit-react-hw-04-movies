import React from 'react';
import PropTypes from 'prop-types';
import LinkItem from '../LinkItem/LinkItem';
import style from './LinksGallery.module.scss';

const LinksGallery = ({ moviesArr }) => {
  return (
    <ul className={style.LinksGallery}>
      {moviesArr.map(({ title, id, link }) => (
        <li key={id}>
          <LinkItem option={{ title, link }} />
        </li>
      ))}
    </ul>
  );
};

LinksGallery.propTypes = {
  moviesArr: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default LinksGallery;
