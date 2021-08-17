import { AuthActionType, AuthTypes, SignOutAction } from '../action/types';
import { InitialStateType } from './types';

export const initialState: InitialStateType = {
  lastName: '',
  firstName: '',
  email: '',
  userIcon: '',
  loggenIn: false,
};

export const singIn = (state = initialState, action: AuthActionType) => {
  switch (action.type) {
    case AuthTypes.SING_IN:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        loggenIn: true,
      };
    case AuthTypes.SING_OUT:
      return initialState;
    case AuthTypes.UPLOAD_ICON:
      return {
        ...state,
        userIcon: action.payload,
      };
    default:
      return state;
  }
};
