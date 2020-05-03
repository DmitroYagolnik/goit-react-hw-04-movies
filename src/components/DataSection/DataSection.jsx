/*
Даний компонент перевіряє відповідь від сервера на наявність помилок.
Якщо під час запиту відбулась помилка - 
ренедериться компонент з повідомленням про помилку.
У випадку успішного опрацювання запиту - 
рендириться дочірній компонент з інформацією від сервера.
*/

import React from 'react';
import PropTypes from 'prop-types';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import style from './DataSection.module.scss';

const DataSection = ({ title, errorMessage, children }) => {
  if (errorMessage) {
    return (
      <section>
        {title && <h2 className={style.DataSectionTitle}>{title}</h2>}
        <ErrorComponent errorMessage={errorMessage} />
      </section>
    );
  }
  return (
    <section>
      {title && <h2 className={style.DataSectionTitle}>{title}</h2>}
      {children}
    </section>
  );
};

DataSection.defaultProps = {
  title: '',
  errorMessage: '',
};

DataSection.propTypes = {
  title: PropTypes.string,
  errorMessage: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DataSection;
