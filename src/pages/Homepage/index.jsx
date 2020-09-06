import React from 'react';
import { useSelector } from 'react-redux';

import Movies from '../../components/Movies/';
import FeatureMovie from '../../components/FeatureMovie/';

import Loading from '../../components/Loading/';

import { Container } from './styles';

function Homepage() {
  const { list } = useSelector((state) => state.categories);

  return (
    <Container>
      {list ? (
        <>
          <FeatureMovie />
          <Movies moviesList={list} />
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

export default Homepage;
