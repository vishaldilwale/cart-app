import { ReduxAction } from "../../../constants/interface";
import { loaderActions } from "../../actions/loader";

const initialState = {
  loading: false
}

const loaderReducer = (state = initialState, action: ReduxAction) => {
  const { type, payload } = action;
  switch (type) {
    case loaderActions.SET_LOADING:
      return { loading: payload };
    default:
      return state;
  }
};

export { loaderReducer };