import { UPDATE_LOGIN_FIELD, SAVE_USER_DATA, LOG_OUT } from 'src/actions/user';
import { EMPTY_FIELDS } from '../actions/user';

export const initialState = {
  isLogged: '',
  user: [],
  email: '',
  password: '',
  address: '',
  firstname: '',
  lastname: '',
  token: '',
  zip: '',
  country: '',
  phone: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case SAVE_USER_DATA:
      return {
        ...state,
        isLogged: action.isLogged,
        user: action.user,
        token: action.token,
        email: '',
        password: '',
      };
    case LOG_OUT:
      return {
        ...state,
        user: [],
        isLogged: '',
        token: '',
      };
    case EMPTY_FIELDS:
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default reducer;
