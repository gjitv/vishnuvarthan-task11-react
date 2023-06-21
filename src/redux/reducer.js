import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("add to cart", action);
      return [action.data, ...data];
      
    case REMOVE_FROM_CART:
      console.warn("Remove to cart", action);
      // data.length=  data.length ? data.length-1 :[]
       const remainingItems= data.filter((item)=>item.id !== action.data.id)
      return [...remainingItems];
      case EMPTY_CART:
        console.warn("cart empty", action);
        data=[]
         
        return [...data];
    default:
      return data;
  }
};


