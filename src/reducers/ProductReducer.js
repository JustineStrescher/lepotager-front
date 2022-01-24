import ProductData from 'src/ProductDetailData';

import {
  CHANGE_INPUT_VALUE,
} from 'src/actions/productDetail';

export const initialState = {
  ProductData,
  quantity: 0,
};

const ProductReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        quantity: action.newValue,
      };

    default:
      return state;
  }
};

export default ProductReducer;
