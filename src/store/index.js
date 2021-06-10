/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import recipesMiddleware from 'src/middlewares/recipesMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';

// le store est le gardien du state
// la fonction createStore prend en argument le reducer
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(recipesMiddleware, userMiddleware),
  // other store enhancers if any
));

export default store;
