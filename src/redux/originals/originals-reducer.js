import { listMoviesOriginals } from './originals-utils';

const INITIAL_STATE = { movies: [] };

const originalsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ORIGINAL_MOVIES':
      return {
        ...state,
        movies: listMoviesOriginals(state.movies, action.payload),
      };
    default:
      return state;
  }
};

export default originalsReducer;
