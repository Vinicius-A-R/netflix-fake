import { addItemsToFavorites } from './favorites-utils';

const INITIAL_STATE = {
  list: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_ITEM':
      return {
        ...state,
        list: addItemsToFavorites(state.list, action.payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
