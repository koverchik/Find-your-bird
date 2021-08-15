import { AuthActionType, AuthTypes, SignOutAction } from '../action/types';
import { InitialStateType } from './types';

export const initialState: InitialStateType = {
  lastName: '',
  firstName: '',
  email: '',
  loggenIn: false,
};

export const singIn = (state = initialState, action: AuthActionType) => {
  switch (action.type) {
    case AuthTypes.SING_IN:
      return {
        ...state,
        firstName: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
        loggenIn: true,
      };
    case AuthTypes.SING_OUT:
      return initialState;
    default:
      return state;
  }
};
