// Action Type
export const IS_LOADING = 'IS_LOADING';
export const CHANGE_MODE = 'CHANGE_MODE';

// Action Creator
export const isLoading = (status) => ({
  type: IS_LOADING,
  status,
});

export const changeMode = () => ({
  type: CHANGE_MODE,
});
