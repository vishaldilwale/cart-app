export const loaderActions = {
    SET_LOADING: 'SET_LOADING',
}

export const setLoading = (payload: boolean) => ({
    type: loaderActions.SET_LOADING,
    payload,
});