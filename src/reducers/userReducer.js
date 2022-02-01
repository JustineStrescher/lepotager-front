import { UPDATE_LOGIN_FIELD, SAVE_USER_DATA } from 'src/actions/user';
import { LOG_OUT } from '../actions/user';

export const initialState = {
  isLogged: '',
  email: '',
  password: '',
  adress: '',
  firstname: '',
  lastname: '',
  token: '',
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
    default:
      return state;
  }
};

export default reducer;