import { SignInPaylod } from './types';
import { AuthTypes } from './types';

export const signIn = (payload: SignInPaylod) => {
  return {
    type: AuthTypes.SING_IN,
    payload,
  };
};

export const signOut = () => {
  return {
    type: AuthTypes.SING_OUT,
  };
};

export const uploadIcon = (payload: string) => {
  return {
    type: AuthTypes.UPLOAD_ICON,
    payload,
  };
};
