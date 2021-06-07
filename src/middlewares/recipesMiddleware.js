/* eslint-disable no-console */
import { FETCH_RECIPES } from 'src/actions/recipesActions';

const recipesMiddleware = (store) => (next) => (action) => {
  console.log('state recipesMiddleware:', store.getState());
  console.log('action recipesMiddleware:', action);
  switch (action.type) {
    case FETCH_RECIPES: {
      console.log('case', FETCH_RECIPES);
      break;
    }
    default:
      next(action);
  }
};

export default recipesMiddleware;
