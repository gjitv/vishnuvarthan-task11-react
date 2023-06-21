import { ADD_PRODUCT } from "./constant";

// addProduct.js
const initialState = {};
  
 export const addProduct = (data = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        // Handle success case, update state accordingly
        console.warn("update success")
        return [...action.data]
      default:
        return data;
    }
  };
  

  