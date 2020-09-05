import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import Tmdb from '../../Tmdb.js';

import { Container } from './styles';

function FeatureMovie() {
  const [movieCover, setMovieCover] = useState({});

  const { movies } = useSelector((state) => state.netflix);
  const movie = useMemo(() => {
    let randomNumber = Math.floor(-(1 - movies.length) * Math.random());

    return movies[randomNumber];
  }, [movies]);

  useEffect(() => {
    if (movie) {
      const loadAll = async () => {
        let randomMovie = await Tmdb.getMovieInfo(movie.id, 'tv');

        setMovieCover(randomMovie);
      };

      loadAll();
    }
  }, [movie]);

  console.log(movieCover);

  return (
    <Container>
      <h2>Feature Movie</h2>

      {movies && (
        <img
          src={`https://image.tmdb.org/t/p/w300${movieCover.backdrop_path}`}
          alt=""
        />
      )}
    </Container>
  );
}

export default FeatureMovie;
