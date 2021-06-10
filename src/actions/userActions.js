// Action Type
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';

// Action Creator
export const changeValue = (valueAction, nameAction) => ({
  type: CHANGE_VALUE,
  value: valueAction,
  name: nameAction,
});

export const login = () => ({
  type: LOGIN,
});
