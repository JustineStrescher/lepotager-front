import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHANGE_QUANTITY,
  FETCH_CURRENT_PRODUCT,
  } from '../actions/cart';
  
  export const initialState = {
    cart: [],
    currentProduct: null
    
  };
  const CartReducer = (state, initialState, action = {}) => {
    switch(action.type){
    case ADD_PRODUCT
      return{};
      
   
    }
   
   }
