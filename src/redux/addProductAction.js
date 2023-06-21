import { POST_ITEM } from "./constant";

export const postItem = (data) => ({
    type: POST_ITEM,
    data
  });
  // actions.js
export const postItemSuccess = (data) => ({
    type: 'POST_ITEM_SUCCESS',
    data,
  });
  
  export const postItemFailure = (error) => ({
    type: 'POST_ITEM_FAILURE',
    payload: error,
  });
  
  