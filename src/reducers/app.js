import { IS_LOADING } from 'src/actions/appActions';

const initialState = {
  loading: true,
};

// Le reducer doit toujours retourner le state
const appReducer = (state = initialState, action = {}) => {
// On switch sur le type d'action
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        loading: action.status,
      };
    }
    default:
      return state;
  }
};
export default appReducer;
