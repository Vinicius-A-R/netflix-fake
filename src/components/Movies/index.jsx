import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import MoviesRow from './MoviesRow';

import { Container } from './styles';

function Movies({ moviesList }) {
  const [favorites, setFavorites] = useState(false);
  const { list } = useSelector((state) => state.favorites);

  console.log('list', list);

  useEffect(() => {
    if (list.length) {
      setFavorites(true);
    }

    return () => setFavorites(false);
  }, [list]);

  return (
    <Container>
      {favorites && (
        <MoviesRow title={'Minha Lista'} results={list} favorites={true} />
      )}

      {moviesList.map(({ title, items }, idx) => {
        return <MoviesRow key={idx} rowId={idx} title={title} {...items} />;
      })}
    </Container>
  );
}

export default Movies;
