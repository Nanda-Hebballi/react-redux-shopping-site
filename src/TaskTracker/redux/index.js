import { productsReducer,productReducer,cartsReducer } from './reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    allProducts:productsReducer,
    product:productReducer,
    carts:cartsReducer
})

export default rootReducer
