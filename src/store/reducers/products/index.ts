
import { ReduxAction } from "../../../constants/interface";
import { productActions } from "../../actions/product";

const initialState = {
  productList: [],
}

const productsReducer = (state = initialState, action: ReduxAction) => {
  const { type, payload } = action;
  switch (type) {
    case productActions.SET_PRODUCT_LIST:
      return { ...state, productList: payload };
    default:
      return state;
  }
};

export { productsReducer };
