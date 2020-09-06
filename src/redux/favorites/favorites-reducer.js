import { addToFavorites, removeToFavorites } from './favorites-utils';

const INITIAL_STATE = {
  list: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_ITEM':
      return {
        ...state,
        list: addToFavorites(state.list, action.payload),
      };
    case 'REMOVE_FAVORITE_ITEM':
      return {
        ...state,
        list: removeToFavorites(state.list, action.payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
