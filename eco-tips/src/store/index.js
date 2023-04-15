// exemple to store
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '@/reducers';
// import middelwares
import authMiddleware from '@/middelware/authMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combine middelwares
const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
