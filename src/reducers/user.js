const initialState = {
  email: 'rudy.gobert@nba.com',
  password: 'utahjazz',
  pseudo: '',
};

// Le reducer doit toujours retourner le state
const userReducer = (state = initialState, action = {}) => {
// On switch sur le type d'action
  switch (action.type) {
    default:
      return state;
  }
};
export default userReducer;
