// Action Type
export const CHANGE_VALUE = 'CHANGE_VALUE';

// Action Creator
export const changeValue = (valueAction, nameAction) => ({
  type: CHANGE_VALUE,
  value: valueAction,
  name: nameAction,
});
