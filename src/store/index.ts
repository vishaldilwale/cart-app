import { createStore, combineReducers } from 'redux';
import { cartReducer, productsReducer, loaderReducer } from './reducers';

const rootReducer = combineReducers({
  cartReducer,
  productsReducer,
  loaderReducer,
});

const store = createStore(rootReducer);

export default store;