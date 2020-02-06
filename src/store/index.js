// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer, { fetchPosts } from 'src/store/reducer';

import axiosMiddleware from './middlewares/axiosMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(axiosMiddleware),
);

const store = createStore(
  reducer,
  enhancers,
);

store.dispatch(fetchPosts());

// == Export
export default store;
