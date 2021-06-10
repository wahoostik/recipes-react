// Action Type
export const IS_LOADING = 'IS_LOADING';

// Action Creator
export const isLoading = (status) => ({
  type: IS_LOADING,
  status,
});
