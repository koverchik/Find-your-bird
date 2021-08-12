// An action object can have other fields with additional information about what happened.
// By convention, we put that information in a field called payload.

import { SignInAction } from './types';

export enum C {
  ADD_USER = 'ADD_USER',
  FIRST_NAME = 'FIRST_NAME',
  LAST_NAME = 'LAST_NAME',
  EMAIL = 'EMAIL',
  ICON_USER = 'ICON_USER',
  SING_IN = 'SING_IN',
}

export const SignIn: SignInAction = (name, lastName, email) => {
  return {
    type: C.SING_IN,
    payload: { name, lastName, email },
  };
};
