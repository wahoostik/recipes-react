import recipesData from 'src/data';

const initialState = [...recipesData];

// Le reducer doit toujours retourner le state
const recipesReducer = (state = initialState, action = {}) => {
// On switch sur le type d'action
  switch (action.type) {
    default:
      return state;
  }
};
export default recipesReducer;
