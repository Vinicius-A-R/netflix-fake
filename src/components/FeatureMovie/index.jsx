import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tmdb from '../../Tmdb.js';

import {
  Container,
  Logo,
  Info,
  Header,
  Description,
  Buttons,
  Genres,
  FeaturedVertical,
  FeaturedHorizontal,
} from './styles';

function FeatureMovie() {
  const [movieCover, setMovieCover] = useState({});
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

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

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 10 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.addEventListener('scroll', scrollListener);
    };
  }, []);

  let yearRelease = new Date(movieCover.first_air_date);
  let getGenres = (genres) => {
    let arrGenres = [];
    for (let i in genres) {
      arrGenres.push({ id: genres[i].id, name: genres[i].name });
    }

    return arrGenres;
  };

  const handleFavorites = () => {
    dispatch({ type: 'ADD_FAVORITE_ITEM', payload: movie });
  };

  return (
    <Container
      image={`https://image.tmdb.org/t/p/original${movieCover.backdrop_path}`}
    >
      <Logo href="/" visible={visible}>
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"></img>
        </a>
      </Logo>
      <FeaturedVertical>
        <FeaturedHorizontal>
          <Info>
            <Header>
              <span className="title">{movieCover.name}</span>
              <span className="votes">{movieCover.vote_average} pontos</span>
              <span className="year">{yearRelease.getFullYear()}</span>
              <span className="seasons">
                {movieCover.number_of_seasons} Temporada
                {movieCover.number_of_seasons > 1 ? 's' : ''}
              </span>
            </Header>
            <Description>{movieCover.overview}</Description>
            <Buttons>
              {/* <a href={`/watch/${movieCover.id}`}>&#127909; Assistir</a> */}
              {/* <a href={`/list/add/${movieCover.id}`}>&#10010; Minha Lista</a> */}
              <a href="#">&#127909; Assistir</a>
              <a href="#" onClick={handleFavorites}>
                &#10010; Minha Lista
              </a>
            </Buttons>
            <Genres>
              Gêneros: &nbsp;
              {getGenres(movieCover.genres).map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </Genres>
          </Info>
        </FeaturedHorizontal>
      </FeaturedVertical>
    </Container>
  );
}

export default FeatureMovie;
