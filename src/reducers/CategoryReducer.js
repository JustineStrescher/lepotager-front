import CategoryData from 'src/CategoryData';

export const initialState = {
  CategoryData,
};

const CategoryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default CategoryReducer;
