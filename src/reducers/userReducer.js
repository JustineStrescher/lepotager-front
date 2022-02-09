import { UPDATE_LOGIN_FIELD, SAVE_USER_DATA, LOG_OUT, EMPTY_FIELDS} from 'src/actions/user';
import { SET_ERROR_CONNECTION } from '../actions/user';

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
  eMail: '',
  passWord: '',
  errorConnection: false,

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
        token: action.token,
        firstname: action.user.firstname,
        lastname: action.user.lastname,
        eMail: action.user.email,
        phone: action.user.phone,
        address: action.user.address,
        city: action.user.city,
        zip: action.user.zip,
        email: '',
        password: '',
      };
    case LOG_OUT:
      return {
        initialState,
      };
    case SET_ERROR_CONNECTION:
      return {
        ...state,
        errorConnection: action.newValue,
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
