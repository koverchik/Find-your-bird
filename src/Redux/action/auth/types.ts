import { Coordinates } from '../../api/type';

export enum AuthTypes {
  SING_IN = 'SING_IN',
  SING_IN_SUCCESS = 'SING_IN_SUCCESS',
  SING_OUT = 'SING_OUT',
  SING_OUT_SUCCESS = 'SING_OUT_SUCCESS',
  UPLOAD_ICON = 'UPLOAD_ICON',
  UPLOAD_ICON_SUCCESS = 'UPLOAD_ICON_SUCCESS',
  REQUEST_LIST_AIRPORTS = 'REQUEST_LIST_AIRPORTS',
}

export type SignInAction = {
  type: AuthTypes.SING_IN;
  payload: SignInPayloadType;
};

export type SignOutAction = {
  type: AuthTypes.SING_OUT;
};

export type UploadImagesAction = {
  type: AuthTypes.UPLOAD_ICON;
  payload: string;
};

export type SignInPayloadType = {
  firstName: string | null;
  lastName: string | null;
  email: string;
  idToken: string | null;
  photo: string | null;
};

export type AuthActionType = SignInAction | SignOutAction | UploadImagesAction;

export type SingInActionType = (payload: SignInPayloadType) => SignInAction;

export type SignOutType = () => SignOutAction;

export type SignInSuccessType = (payload: SignInPayloadType) => {
  type: AuthTypes.SING_IN_SUCCESS;
  payload: SignInPayloadType;
};

export type SignOutSuccessType = () => {
  type: AuthTypes.SING_OUT_SUCCESS;
};

export type UploadIconType = (payload: string) => {
  type: AuthTypes.UPLOAD_ICON;
  payload: string;
};

export type UploadIconSuccessType = (payload: string) => {
  type: AuthTypes.UPLOAD_ICON_SUCCESS;
  payload: string;
};
export type PayloadAirportsType = {
  radius: number;
  coordinates: Coordinates;
};

export type PayloadListAirportsType = {
  radius: number;
  coordinates: Coordinates;
};
