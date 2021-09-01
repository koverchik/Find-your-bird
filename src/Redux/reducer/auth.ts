import { AuthActionType } from '../action/auth/types';
import { AuthTypes } from '../action/auth/types';
import { InitialStateAuthType } from './types';

export const initialStateAuth: InitialStateAuthType = {
  lastName: '',
  firstName: '',
  email: '',
  userIcon: '',
  loggedIn: false,
};

export const auth = (state = initialStateAuth, action: AuthActionType) => {
  switch (action.type) {
    case AuthTypes.SING_IN:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        loggedIn: true,
      };
    case AuthTypes.SING_OUT:
      return initialStateAuth;
    case AuthTypes.UPLOAD_ICON:
      return {
        ...state,
        userIcon: action.payload,
      };
    default:
      return state;
  }
};
