import { UPDATE_LOGIN_FIELD, SAVE_USER_DATA, LOG_OUT } from 'src/actions/user';
import { EMPTY_FIELDS } from '../actions/user';

export const initialState = {
  isLogged: '',
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
        lastname: action.lastname,
        token: action.token,
        email: '',
        password: '',
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: '',
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
