export enum AuthTypes {
  SING_IN = 'SING_IN',
  SING_IN_SUCCCESS = 'SING_IN_SUCCCESS',
  SING_OUT = 'SING_OUT',
  SING_OUT_SUCCESS = 'SING_OUT_SUCCESS',
  UPLOAD_ICON = 'UPLOAD_ICON',
}

export type SignInAction = {
  type: AuthTypes.SING_IN;
  payload: SignInPaylod;
};

export type SignOutAction = {
  type: AuthTypes.SING_OUT;
};

export type UploadImages = {
  type: AuthTypes.UPLOAD_ICON;
  payload: { iconUser: string };
};

export type SignInPaylod = { firstName: string; lastName: string; email: string };

export type AuthActionType = SignInAction | SignOutAction | UploadImages;
