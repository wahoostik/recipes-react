/* eslint-disable no-console */
import axios from 'axios';
import { LOGIN, saveUser } from 'src/actions/userActions';

const userMiddleware = (store) => (next) => async (action) => {
  // console.log('state:', store.getState());
  // console.log('action:', action);
  switch (action.type) {
    case LOGIN: {
      console.log('case', LOGIN);
      try {
        const state = store.getState();
        const response = await axios.post('http://localhost:3001/login', {
          email: state.userReducer.email,
          password: state.userReducer.password,
        });
        console.log('reponse', response);
        // ici on va stocker les infos que nous retourne la requête dans le state
        // => modification de state => dispatch d'action
      }
      catch (error) {
        console.trace(error);
      }
      break;
    }
    default:
      next(action);
  }
};

export default userMiddleware;
