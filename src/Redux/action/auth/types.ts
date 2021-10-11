import { User } from '@react-native-google-signin/google-signin';
import { Coordinates } from '../../api/type';

export enum AuthTypes {
  SING_IN = 'SING_IN',
  SING_IN_SUCCESS = 'SING_IN_SUCCESS',
  SING_OUT = 'SING_OUT',
  SING_OUT_SUCCESS = 'SING_OUT_SUCCESS',
  UPLOAD_ICON = 'UPLOAD_ICON',
  UPLOAD_ICON_SUCCESS = 'UPLOAD_ICON_SUCCESS',
  REQUEST_LIST_AIRPORTS = 'REQUEST_LIST_AIRPORTS',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
  REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS',
}

export type SignInAction = {
  type: AuthTypes.SING_IN;
};

export type SignInActionSuccess = {
  type: AuthTypes.SING_IN_SUCCESS;
  payload: SignInPayloadType;
};

export type SignOutAction = {
  type: AuthTypes.SING_OUT;
};

export type UploadImagesAction = {
  type: AuthTypes.UPLOAD_ICON;
  payload: string;
};

export type RefreshTokenAction = {
  type: AuthTypes.REFRESH_TOKEN_SUCCESS;
  payload: string;
};

export type RefreshTokenType = {
  type: AuthTypes.REFRESH_TOKEN;
};

export type SignInPayloadType = {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  userIcon: string | null;
  idToken: User['idToken'];
};

export type AuthActionType =
  | SignInActionSuccess
  | SignOutAction
  | UploadImagesAction
  | SignInAction
  | RefreshTokenType
  | RefreshTokenAction;

export type SingInActionType = () => SignInAction;

export type SignOutType = () => SignOutAction;

export type TokenRefreshType = () => {
  type: AuthTypes.REFRESH_TOKEN;
};

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

export type RefreshTokenSuccessType = (payload: string) => {
  type: AuthTypes.REFRESH_TOKEN_SUCCESS;
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
