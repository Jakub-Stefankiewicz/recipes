import { combineReducers } from "redux";
import { recipes } from "./recipes";
import { products } from "./products";


export default combineReducers({
    recipes,
    products
});