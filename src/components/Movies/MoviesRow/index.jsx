import React, { useState } from 'react';

import Card from '../../Card/';

import { Container, Grid, Row, ButtonScroll } from './styles';

function MoviesRow({ title, rowId, results }) {
  const [move, setMove] = useState(154);

  const scrollRight = () => {
    let scroll = document.getElementById(`${title}`);

    if (move < 2010) {
      setMove(move + 154);
      scroll.scrollLeft = move;
    }

    console.log(move);
  };

  return (
    <Container>
      <h2>{title}</h2>

      <Grid>
        <ButtonScroll className="row-left">&#10096;</ButtonScroll>
        <Row id={title}>
          {results.map((result) => {
            return <Card key={result.id} movie={result} />;
          })}
        </Row>
        <ButtonScroll className="row-right" onClick={scrollRight}>
          &#10095;
        </ButtonScroll>
      </Grid>
    </Container>
  );
}

export default MoviesRow;
