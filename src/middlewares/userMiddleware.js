/* eslint-disable no-console */
import { LOGIN } from 'src/actions/userActions';

const userMiddleware = (store) => (next) => (action) => {
  console.log('state:', store.getState());
  console.log('action:', action);
  switch (action.type) {
    case LOGIN: {
      console.log('case', LOGIN);
      break;
    }
    default:
      next(action);
  }
};

export default userMiddleware;
