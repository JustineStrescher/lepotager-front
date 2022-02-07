import { UPDATE_LOGIN_FIELD, SAVE_USER_DATA, LOG_OUT } from 'src/actions/user';

export const initialState = {
  isLogged: '',
  user: [],
  email: '',
  password: '',
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
    default:
      return state;
  }
};

export default reducer;
