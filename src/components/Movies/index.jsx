import React from 'react';

import MoviesRow from './MoviesRow';

import { Container } from './styles';

function Movies({ list }) {
  return (
    <Container>
      {list.map(({ title, items }, idx) => {
        return <MoviesRow key={idx} title={title} {...items} />;
      })}
    </Container>
  );
}

export default Movies;
