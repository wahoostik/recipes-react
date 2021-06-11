// Action Type
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const LOGOUT = 'LOGOUT';
export const FETCH_FAV = 'FETCH_FAV';

// Action Creator
export const changeValue = (valueAction, nameAction) => ({
  type: CHANGE_VALUE,
  value: valueAction,
  name: nameAction,
});

export const login = () => ({
  type: LOGIN,
});

export const saveUser = (userAction) => ({
  type: SAVE_USER,
  user: userAction,
});

export const logout = () => ({
  type: LOGOUT,
});

export const fetchFav = () => ({
  type: FETCH_FAV,
});
