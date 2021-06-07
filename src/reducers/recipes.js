/* eslint-disable no-console */
import { SAVE_RECIPES } from 'src/actions/recipesActions';

const initialState = [];

// Le reducer doit toujours retourner le state
const recipesReducer = (state = initialState, action = {}) => {
// On switch sur le type d'action
  switch (action.type) {
    case SAVE_RECIPES: {
      // console.log('case', SAVE_RECIPES);
      return [...action.recipes];
    }
    default:
      return state;
  }
};
export default recipesReducer;
