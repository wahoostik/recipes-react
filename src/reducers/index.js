/* eslint-disable no-unused-vars */
// Fonction qui permet d'assembler les sous-reducer qu'on va utiliser dans notre application
import { combineReducers } from 'redux';
import recipesReducer from './recipes';
import userReducer from './user';
import appReducer from './app';

// Le reducer doit toujours retourner le state
const globalReducer = combineReducers({
  // Ici, chaque propriétés correspondra à un mini reducer
  test: (state = { stateTest: 'hello' }, action = {}) => state,
  recipesReducer,
  userReducer,
  appReducer,
});

export default globalReducer;
