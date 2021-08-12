import { SignInAction, SignOutAction } from './types';
import { AuthTypes } from './types';

export const SignIn: SignInAction = (name, lastName, email) => {
  return {
    type: AuthTypes.SING_IN,
    payload: { name, lastName, email },
  };
};

export const SignOut: SignOutAction = () => {
  return {
    type: AuthTypes.SING_OUT,
    payload: null,
  };
};
