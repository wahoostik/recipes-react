/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import recipesMiddleware from 'src/middlewares/recipesMiddleware';

// le store est le gardien du state
// la fonction createStore prend en argument le reducer
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(recipesMiddleware),
  // other store enhancers if any
));

export default store;
