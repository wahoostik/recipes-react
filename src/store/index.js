/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import reducer from 'src/reducers';

// le store est le gardien du state
// la fonction createStore prend en argument le reducer
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));

export default store;
