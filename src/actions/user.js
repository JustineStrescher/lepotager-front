export const UPDATE_ACOUNT_FIELD = 'UPDATE_ACOUNT_FIELD';

export const updateAcountField = (newValue, identifier) => ({
  type: UPDATE_ACOUNT_FIELD,
  newValue: newValue,
  identifier: identifier,
});
