export enum AuthTypes {
  SING_IN = 'SING_IN',
  SING_IN_SUCCCESS = 'SING_IN_SUCCCESS',
  SING_OUT = 'SING_OUT',
  SING_OUT_SUCCESS = 'SING_OUT_SUCCESS',
  UPLOAD_ICON = 'UPLOAD_ICON',
  UPLOAD_ICON_SUCCESS = 'UPLOAD_ICON_SUCCESS',
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

export type SingInActionType = (payload: SignInPaylod) => SignInAction;
export type SignOutType = () => SignOutAction;

export type SignInSuccessType = (payload: SignInPaylod) => {
  type: AuthTypes.SING_IN_SUCCCESS;
  payload: SignInPaylod;
};

export type SignOutSuccessType = () => {
  type: AuthTypes.SING_OUT_SUCCESS;
};

export type UploadIconType = (payload: string) => {
  type: AuthTypes.UPLOAD_ICON;
  payload: string;
};

export type uploadIconSuccessType = (payload: string) => {
  type: AuthTypes.UPLOAD_ICON_SUCCESS;
  payload: string;
};
