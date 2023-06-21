import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart=(data)=>{

    console.warn("action called");
    return{
        type:ADD_TO_CART,
        data
    }
}

export const removeToCart=(data)=>{

    console.warn("removed");
    return{
        type:REMOVE_FROM_CART,
        data
    }
}

export const emptyCart=()=>{

    console.warn("cart empty");
    return{
        type:EMPTY_CART,
    }
}


