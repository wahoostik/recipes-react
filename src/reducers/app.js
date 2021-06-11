import { IS_LOADING, CHANGE_MODE } from 'src/actions/appActions';

const initialState = {
  loading: true,
  darkMode: false,
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
    case CHANGE_MODE: {
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};
export default appReducer;
