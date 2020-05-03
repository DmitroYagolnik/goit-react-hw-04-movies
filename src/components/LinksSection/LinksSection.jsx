import React from 'react';
import PropTypes from 'prop-types';
import LinksGallery from '../LinksGallery/LinksGallery';
import InformationLinksOption from '../../servises/InformationLinksOption';
import style from './LinksSection.module.scss';

const LinksSection = ({ title, movieId }) => {
  return (
    <section className={style.LinksSection}>
      <h3 className={style.LinksSectionTitle}>{title}</h3>
      <LinksGallery moviesArr={InformationLinksOption(movieId)} />
    </section>
  );
};

LinksSection.propTypes = {
  title: PropTypes.string.isRequired,
  movieId: PropTypes.string.isRequired,
};
export default LinksSection;
