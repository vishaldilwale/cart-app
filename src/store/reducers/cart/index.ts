import { ProductInterface, ReduxAction } from "../../../constants/interface";
import { cartActions } from "../../actions/cart";

const initialState = {
    cartList: []
}

const cartReducer = (state = initialState, action: ReduxAction) => {
    const { type, payload } = action;
    switch (type) {
        case cartActions.ADD_TO_CART:
            return { ...state, cartList: [...state.cartList, payload] };
        case cartActions.REMOVE_FROM_CART:
            return { ...state, cartList: state.cartList?.filter((product: ProductInterface) => product.id !== payload.id) };
        case cartActions.UPDATE_ITEM_COUNT:
            return { ...state, cartList: payload };
        default:
            return state;
    }
};

export { cartReducer };