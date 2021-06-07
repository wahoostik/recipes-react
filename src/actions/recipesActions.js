// Action Type
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SAVE_RECIPES = 'SAVE_RECIPES';

// Action Creator
export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const saveRecipes = (recipesData) => ({
  type: SAVE_RECIPES,
  recipes: recipesData,
});
