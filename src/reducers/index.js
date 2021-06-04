// Le state initial est un objet vide
const initialState = {};

// Le reducer doit toujours retourner le state
const reducer = (state = initialState, action = {}) => {
// On switch sur le type d'action
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
