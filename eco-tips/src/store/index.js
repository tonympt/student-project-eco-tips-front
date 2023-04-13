/* eslint-disable no-undef */
import { createStore, compose } from 'redux';

// import reducer from 'src/routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, enhancers);

export default store;
