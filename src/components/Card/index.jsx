import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, Remove, Favorite } from './styles';

function Card({ movie, favorites }) {
  const dispatch = useDispatch();

  return (
    <Container>
      {favorites ? (
        <Remove
          onClick={() =>
            dispatch({ type: 'REMOVE_FAVORITE_ITEM', payload: movie })
          }
        >
          &#10006;
        </Remove>
      ) : (
        <Favorite
          onClick={() =>
            dispatch({ type: 'ADD_FAVORITE_ITEM', payload: movie })
          }
        >
          &#10084;
        </Favorite>
      )}

      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={`${movie.original_title}`}
      />
    </Container>
  );
}

export default Card;
