export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';

export const updateLoginField = (newValue, identifier) => ({
  type: UPDATE_LOGIN_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const LOG_IN = 'LOG_IN';

export const logIn = () => ({
  type: LOG_IN,
});

export const LOG_OUT = 'LOG_OUT';

export const logOut = () => ({
  type: LOG_OUT,
});

export const SIGN_UP = 'SIGN_UP';

export const signUp = () => ({
  type: SIGN_UP,
});

export const EMPTY_FIELDS = 'EMPTY_FIELDS';

export const emptyFields = () => ({
  type: EMPTY_FIELDS,
});

export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const saveUserData = (isLogged, token, user = '') => ({
  type: SAVE_USER_DATA,
  isLogged: isLogged,
  token: token,
  user: user,
});

export const FETCH_USER_DATA = 'FETCH_USER_DATA';

export const fetchUserData = () => ({
  type: FETCH_USER_DATA,
});

export const UPDATE_ACOUNT_FIELD = 'UPDATE_ACOUNT_FIELD';

export const updateAcountField = (newValue, identifier) => ({
  type: UPDATE_ACOUNT_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const UPDATE_ACOUNT = 'UPDATE_ACOUNT';

export const updateAcount = () => ({
  type: UPDATE_ACOUNT,
});

export const SET_ERROR_CONNECTION = 'SET_ERROR_CONNECTION';

export const setErrorConnection = (newValue) => ({
  type: SET_ERROR_CONNECTION,
  newValue: newValue,
});
