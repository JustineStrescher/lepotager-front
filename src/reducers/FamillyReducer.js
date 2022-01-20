import FamillyData from 'src/FamillyData';

export const initialState = {
  FamillyData,
};

const FamillyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default FamillyReducer;
