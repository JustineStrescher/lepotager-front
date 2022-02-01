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

export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const saveUserData = (isLogged, username, token) => ({
  type: SAVE_USER_DATA,
  isLogged: isLogged,
  token: token,
  username: username,
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
