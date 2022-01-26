import ProductData from 'src/ProductDetailData';

export const initialState = {
  ProductData,
};

const FamillyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default FamillyReducer;
