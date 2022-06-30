import { combineReducers, createStore,  applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createMiddleware } from 'redux-api-middleware';

import { coinsReducer } from './coins/reducers';
import { categoriesReducer } from './categories/reducers';
import { exchangesReducer } from './exchanges/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
  coins: coinsReducer,
  categories: categoriesReducer,
  exchanges: exchangesReducer

  });

const store = createStore(combinedReducers, 
  composeEnhancers(applyMiddleware(thunk, createMiddleware(), logger)),
);

export default store;
