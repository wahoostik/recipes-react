/* eslint-disable max-len */
/* eslint-disable no-console */
import { CHANGE_VALUE } from 'src/actions/userActions';

const initialState = {
  email: 'rudy.gobert@nba.com',
  password: 'utahjazz',
  infos: {
    pseudo: '',
  },
};

// Le reducer doit toujours retourner le state
const userReducer = (state = initialState, action = {}) => {
// On switch sur le type d'action
  switch (action.type) {
    case CHANGE_VALUE: {
      console.log('case', CHANGE_VALUE);
      return {
        ...state,
        [action.name]: action.value, // modification dynamique, ça sera soit email, soit password qui sera changé
      };
    }
    default:
      return state;
  }
};
export default userReducer;
