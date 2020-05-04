/*
  Функція, яка повертає масив об'єктів-налаштувань 
  для веб-посилань
*/
const informationLinksOption = movieId => {
  return [
    {
      title: 'Cast',
      link: `/movies/${movieId}/cast`,
      id: Math.floor(Math.random() * 1000),
    },
    {
      title: 'Reviews',
      link: `/movies/${movieId}/reviews`,
      id: Math.floor(Math.random() * 1000),
    },
  ];
};

export default informationLinksOption;
