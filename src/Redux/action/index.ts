import {
  SignInPaylod,
  SignInSuccessType,
  SignOutSuccessType,
  SignOutType,
  SingInActionType,
  UploadIconSuccessType,
  UploadIconType,
} from './types';
import { AuthTypes } from './types';

export const signIn: SingInActionType = (payload) => {
  return {
    type: AuthTypes.SING_IN,
    payload,
  };
};

export const signInSuccess: SignInSuccessType = (payload: SignInPaylod) => {
  return {
    type: AuthTypes.SING_IN_SUCCCESS,
    payload,
  };
};

export const signOut: SignOutType = () => {
  return {
    type: AuthTypes.SING_OUT,
  };
};

export const signOutSuccess: SignOutSuccessType = () => {
  return {
    type: AuthTypes.SING_OUT_SUCCESS,
  };
};

export const uploadIcon: UploadIconType = (payload) => {
  return {
    type: AuthTypes.UPLOAD_ICON,
    payload,
  };
};

export const uploadIconSuccess: UploadIconSuccessType = (payload) => {
  return {
    type: AuthTypes.UPLOAD_ICON_SUCCESS,
    payload,
  };
};
