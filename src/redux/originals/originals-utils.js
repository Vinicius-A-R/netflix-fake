export const listMoviesOriginals = (listMovies, moviesList) => {
  const existMovies = moviesList.find((list) => list.slug === 'originals');
  if (existMovies) {
    return existMovies.items.results;
  }

  return [...listMovies];
};
