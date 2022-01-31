
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';

export const updateLoginField = (searchValue, targetField) => ({
  type: UPDATE_LOGIN_FIELD,
  searchValue: searchValue,
  targetField: targetField,
});

export const LOG_IN = 'LOG_IN';

export const logIn = () => ({
  type: LOG_IN,
});

export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const saveUserData = (isLogged) => ({
  type: SAVE_USER_DATA,
  isLogged: isLogged,

export const UPDATE_ACOUNT_FIELD = 'UPDATE_ACOUNT_FIELD';

export const updateAcountField = (newValue, identifier) => ({
  type: UPDATE_ACOUNT_FIELD,
  newValue: newValue,
  identifier: identifier,

});
