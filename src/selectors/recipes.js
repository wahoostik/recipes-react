/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
// fonction qui prend en paramètre une listre de recette et un slug (string)
// et retourne la recette de la liste qui aura le même slug
export const findRecipeBySlug = (recipesReducer, slug) => recipesReducer.find((recipe) => recipe.slug === slug);
