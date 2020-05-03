import React from 'react';
import PropTypes from 'prop-types';
import style from './MainMovieInformation.module.scss';

const MainMovieInformation = ({ movieData }) => {
  const {
    title,
    posterPath,
    releaseYear,
    popularity,
    overview,
    genres,
  } = movieData;
  return (
    <section className={style.MainMovieInformationContainer}>
      <img className={style.PosterImage} src={posterPath} alt={title} />
      <div className={style.InformationTextWrapper}>
        <h2 className={style.MovieTitle}>
          {title} ({releaseYear})
        </h2>
        <p className={style.InformationText}>User Score: {popularity} %</p>

        <div>
          <h3>Overview</h3>
          <p className={style.InformationText}>{overview}</p>
        </div>

        <div>
          <h3>Genres</h3>
          <p className={style.GenresInformation}>
            {genres.map(genresElem => (
              <span key={genresElem.id}>{genresElem.name}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

MainMovieInformation.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default MainMovieInformation;
