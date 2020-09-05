import React from 'react';

import { Container } from './styles';

function Card({ movie }) {
  return (
    <Container image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={`${movie.original_title}`}
      />
    </Container>
  );
}

export default Card;
