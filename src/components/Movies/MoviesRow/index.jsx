import React from 'react';

import Card from '../../Card/';

import { Container, Grid, Row, ButtonScroll } from './styles';

function MoviesRow({ title, results }) {
  const buttonRight = () => {
    let scroll = document.getElementById(`${title}`);

    scroll.scrollLeft += 480;
  };

  const buttonLeft = () => {
    let scroll = document.getElementById(`${title}`);

    scroll.scrollLeft -= 320;
  };

  return (
    <Container>
      <h2>{title}</h2>

      <Grid>
        <ButtonScroll className="row-left" onClick={buttonLeft}>
          &#10096;
        </ButtonScroll>
        <Row id={title}>
          {results.map((result) => {
            return <Card key={result.id} movie={result} />;
          })}
        </Row>
        <ButtonScroll className="row-right" onClick={buttonRight}>
          &#10095;
        </ButtonScroll>
      </Grid>
    </Container>
  );
}

export default MoviesRow;
