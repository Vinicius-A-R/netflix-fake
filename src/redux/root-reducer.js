import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import categoriesReducer from './categories/categories-reducer';
import originalsReducer from './originals//originals-reducer';
import favoritesReducer from './favorites/favorites-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  netflix: originalsReducer,
  favorites: favoritesReducer,
});

export default persistReducer(persistConfig, rootReducer);
