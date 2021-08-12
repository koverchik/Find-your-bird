import { AuthActionType, AuthTypes } from '../action/types';
import { InitialStateType } from './types';

export const initialState: InitialStateType = {
  lastName: '',
  firstName: '',
  email: '',
};

export const singIn = (state = initialState, action: AuthActionType) => {
  switch (action.type) {
    case AuthTypes.SING_IN:
      return {
        ...state,
        firstName: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
      };
    case AuthTypes.SING_OUT:
      return initialState;
    default:
      return state;
  }
};
