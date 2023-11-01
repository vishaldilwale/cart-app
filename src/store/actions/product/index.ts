export const productActions = {
    SET_PRODUCT_LIST: 'SET_PRODUCT_LIST'
}

export const setProductList = (payload: any) => ({
    type: productActions.SET_PRODUCT_LIST,
    payload,
});