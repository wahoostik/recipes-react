// Action Type
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';

// Action Creator
export const changeValue = (valueAction, nameAction) => ({
  type: CHANGE_VALUE,
  value: valueAction,
  name: nameAction,
});

export const login = () => ({
  type: LOGIN,
});

export const saveUser = () => ({
  type: SAVE_USER,
});
