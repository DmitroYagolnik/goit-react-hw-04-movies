export const mapperMovies = movies =>
  movies.map(({ id, title }) => {
    return { id, title, link: `/movies/${id}` };
  });

export const mapperMovieData = ({
  title,
  poster_path,
  release_date,
  popularity,
  overview,
  genres,
}) => {
  return {
    title,
    posterPath: `https://image.tmdb.org/t/p/w500${poster_path}`,
    releaseYear: parseInt(release_date),
    popularity: Math.round(popularity),
    overview,
    genres,
  };
};

export const mapperCast = moviesId =>
  moviesId.map(({ id, name, profile_path, character }) => {
    return {
      id: String(id),
      name,
      profilePath: profile_path
        ? `https://image.tmdb.org/t/p/w500${profile_path}`
        : null,
      character,
    };
  });

export const mapperReviews = moviesId =>
  moviesId.map(({ author, content, id }) => {
    return {
      author,
      content,
      id: String(id),
    };
  });
