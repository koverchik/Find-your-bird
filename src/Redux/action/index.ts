import { payloadType, SignInAction, SignOutAction } from './types';
import { AuthTypes } from './types';

export const SignIn = (payload: SignInAction) => {
  return {
    type: AuthTypes.SING_IN,
    payload,
  };
};

export const SignOut = () => {
  return {
    type: AuthTypes.SING_OUT,
  };
};
