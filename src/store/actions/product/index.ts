import { ProductInterface } from "../../../constants/interface";

export const productActions = {
    SET_PRODUCT_LIST: 'SET_PRODUCT_LIST'
}

export const setProductList = (payload: ProductInterface[]) => ({
    type: productActions.SET_PRODUCT_LIST,
    payload,
});