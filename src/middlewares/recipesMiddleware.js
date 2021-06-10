/* eslint-disable no-console */
import axios from 'axios';
import { FETCH_RECIPES, saveRecipes } from 'src/actions/recipesActions';
import { isLoading } from 'src/actions/appActions';

const recipesMiddleware = (store) => (next) => (action) => {
  console.log('state recipesMiddleware:', store.getState());
  console.log('action recipesMiddleware:', action);
  switch (action.type) {
    case FETCH_RECIPES: {
      console.log('case', FETCH_RECIPES);
      const fetchData = async () => {
        try {
          // const { responseData } = await axios.get('http://localhost:3001/recipes');
          // const action = saveRecipes(responseData);

          const response = await axios.get('http://localhost:3001/recipes');
          const actionRecipes = saveRecipes(response.data);
          store.dispatch(actionRecipes);
          console.log(actionRecipes);
        }
        catch (error) {
          console.trace(error);
        }
        finally {
          // je veux remettre mon application normalement après le chargement
          // on retire l'état du loading
          // const actionLoading = isLoading(false);
          // store.dispatch(actionLoading);
          // console.log(actionLoading);
          store.dispatch(isLoading(false));
        }
      };
      fetchData();
      break;
    }
    default:
      next(action);
  }
};

export default recipesMiddleware;
