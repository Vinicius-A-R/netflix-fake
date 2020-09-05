import React from 'react';

import Card from '../../Card/';

import { Container, Grid, Row } from './styles';

function MoviesRow({ title, results }) {
  return (
    <Container>
      <h2>{title}</h2>

      <Grid>
        <Row>
          {results.map((result) => {
            return <Card key={result.id} movie={result} />;
          })}
        </Row>
      </Grid>
    </Container>
  );
}

export default MoviesRow;
