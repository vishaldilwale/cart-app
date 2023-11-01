import { ProductInterface } from "../../../constants/interface";

export const cartActions = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    UPDATE_ITEM_COUNT: 'UPDATE_ITEM_COUNT',
}

export const addToCart = (payload: ProductInterface) => ({
    type: cartActions.ADD_TO_CART,
    payload,
});

export const removeFromCart = (payload: ProductInterface) => ({
    type: cartActions.REMOVE_FROM_CART,
    payload,
});

export const updateItemCount = (payload: any) => ({
    type: cartActions.UPDATE_ITEM_COUNT,
    payload,
});
