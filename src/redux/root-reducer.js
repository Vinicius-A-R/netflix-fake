import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import categoriesReducer from './categories/categories-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default persistReducer(persistConfig, rootReducer);
