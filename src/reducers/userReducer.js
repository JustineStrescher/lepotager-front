import { UPDATE_LOGIN_FIELD, SAVE_USER_DATA } from 'src/actions/user';

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
        //
      };

    default:
      return state;
  }
};

export default reducer;
