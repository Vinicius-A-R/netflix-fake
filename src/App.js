import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tmdb from './Tmdb';

import Routes from './routes';

function App() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.categories);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log('list', list);

      await dispatch({ type: 'SET_CATEGORIES_LIST', payload: list });
    };

    loadAll();
  }, []);

  console.log('movies', movies);
  return (
    <>
      <Routes movies={''} />
    </>
  );
}

export default App;
