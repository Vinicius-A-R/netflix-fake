export const listMoviesOriginals = (listMovies, moviesList) => {
  const existMovies = moviesList.find((list) => list.slug === 'originals');
  if (existMovies) {
    console.log('exist', existMovies);
    return existMovies.items.results;
  }

  return [...listMovies];
};
