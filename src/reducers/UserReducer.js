import { UPDATE_ACOUNT_FIELD } from '../actions/user';

export const initialState = {
  isLogged: true,
  name: 'Jean-claude',
  lastName: 'Dusse',
  eMail: 'contact@lepotagerdesculsfouettes.fr',
  tel: '066666666',
  adress: 'Au fond la bas',
  town: 'Rennes',
  CP: '35000',
  MP: '000000',

};

const UserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_ACOUNT_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    default:
      return state;
  }
};

export default UserReducer;
