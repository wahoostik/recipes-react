/* eslint-disable max-len */
/* eslint-disable no-console */
import { CHANGE_VALUE, SAVE_USER } from 'src/actions/userActions';

const initialState = {
  email: 'rudy.gobert@nba.com',
  password: 'utahjazz',
  infos: {
    logged: false, // ce que l'API nous renvoie
    pseudo: '', // ce que l'API nous renvoie
    token: '', // ce que l'API nous renvoie
  },
};

// Le reducer doit toujours retourner le state
const userReducer = (state = initialState, action = {}) => {
// On switch sur le type d'action
  switch (action.type) {
    case CHANGE_VALUE: {
      // console.log('case', CHANGE_VALUE);
      return {
        ...state,
        [action.name]: action.value, // modification dynamique, ça sera soit email, soit password qui sera changé
      };
    }
    case SAVE_USER: {
      return {
        ...state,
        email: '',
        password: '',
        infos: {
          ...state.infos,
          // pseudo: action.user.pseudo,
          ...action.user,
        },
      };
    }
    default:
      return state;
  }
};
export default userReducer;
