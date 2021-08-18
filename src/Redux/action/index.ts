import { SignInAction, SignInPaylod, SignOutAction } from './types';
import { AuthTypes } from './types';

export type SingInActionType = (payload: SignInPaylod) => SignInAction;
export type signOutType = () => SignOutAction;

export const signIn: SingInActionType = (payload) => {
  return {
    type: AuthTypes.SING_IN,
    payload,
  };
};

export const signInSuccess = (payload: SignInPaylod) => {
  return {
    type: AuthTypes.SING_IN_SUCCCESS,
    payload,
  };
};

export const signOut: signOutType = () => {
  return {
    type: AuthTypes.SING_OUT,
  };
};

export const signOutSuccess = () => {
  return {
    type: AuthTypes.SING_OUT_SUCCESS,
  };
};

export const uploadIcon = (payload: string) => {
  return {
    type: AuthTypes.UPLOAD_ICON,
    payload,
  };
};
