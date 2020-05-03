import React from 'react';
import PropTypes from 'prop-types';
import style from './AdditionalInformation.module.scss';

const AdditionalInformation = ({ informationArr }) => {
  return (
    <ul className={style.InformationList}>
      {informationArr.map(elem => {
        const { id, profilePath, name, character, author, content } = elem;
        return (
          <li key={id} className={style.InformationItem}>
            {profilePath && (
              <img
                className={style.ProfilePhoto}
                src={profilePath}
                alt={`${name}-foto`}
              />
            )}
            {name && <p>{name}</p>}
            {character && <p>Character: {character}</p>}
            {author && <h4>Author: {author}</h4>}
            {content && <p>{content}</p>}
          </li>
        );
      })}
    </ul>
  );
};

AdditionalInformation.propTypes = {
  informationArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      profilePath: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default AdditionalInformation;
