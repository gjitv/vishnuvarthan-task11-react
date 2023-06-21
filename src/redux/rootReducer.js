import { combineReducers } from "redux";
import {cartData} from "./reducer"
import { productData } from "./ProductReducer";
import {addProduct} from "./addProductReducer"
export default combineReducers({
    cartData,
    productData,
    addProduct
})