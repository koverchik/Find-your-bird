import { Asset } from 'react-native-image-picker/lib/typescript/types';
import { ResponseAirports as ResponseAirports, ResponseItemsAirports } from '../api/type';

export enum AuthTypes {
  SING_IN = 'SING_IN',
  SING_IN_SUCCESS = 'SING_IN_SUCCESS',
  SING_OUT = 'SING_OUT',
  SING_OUT_SUCCESS = 'SING_OUT_SUCCESS',
  UPLOAD_ICON = 'UPLOAD_ICON',
  UPLOAD_ICON_SUCCESS = 'UPLOAD_ICON_SUCCESS',
  REQUEST_LIST_AIRPORTS = 'REQUEST_LIST_AIRPORTS',
}

export enum GetAirportsTypes {
  REQUEST_LIST_AIRPORTS = 'REQUEST_LIST_AIRPORTS',
  REQUEST_SUCCESS = 'REQUEST_SUCCESS',
  REQUEST_FAILURE = 'REQUEST_FAILURE',
}

export type AirportsAction = {
  type: GetAirportsTypes.REQUEST_LIST_AIRPORTS;
  payload: any;
};

export type SignInAction = {
  type: AuthTypes.SING_IN;
  payload: SignInPayload;
};

export type SignOutAction = {
  type: AuthTypes.SING_OUT;
};

export type UploadImagesAction = {
  type: AuthTypes.UPLOAD_ICON;
  payload: string;
};

export type SignInPayload = { firstName: string; lastName: string; email: string };

export type AuthActionType = SignInAction | SignOutAction | UploadImagesAction;

export type SingInActionType = (payload: SignInPayload) => SignInAction;

export type SignOutType = () => SignOutAction;

export type SignInSuccessType = (payload: SignInPayload) => {
  type: AuthTypes.SING_IN_SUCCESS;
  payload: SignInPayload;
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
export type PayloadAirports = {
  radius: number;
  coordinates: { latitude: number; longitude: number };
};

export type AirportsListType = (payload: PayloadAirports) => {
  type: GetAirportsTypes.REQUEST_LIST_AIRPORTS;
  payload: PayloadAirports;
};

export type RequestSuccessType = (payload: ResponseItemsAirports) => {
  type: GetAirportsTypes.REQUEST_SUCCESS;
  payload: ResponseItemsAirports;
};

export type RequestFailureType = (payload: string) => {
  type: GetAirportsTypes.REQUEST_FAILURE;
  payload: string;
};

export type GetAirportsActions = AirportsListType | RequestSuccessType | RequestFailureType;

export type PayloadListAirportsType = {
  radius: number;
  coordinates: { latitude: number; longitude: number };
};

export type ListAirportsType = {
  type: GetAirportsTypes.REQUEST_LIST_AIRPORTS;
  payload: PayloadListAirportsType;
};

export type RequestSuccessListAirportsType = {
  type: GetAirportsTypes.REQUEST_SUCCESS;
  payload: ResponseItemsAirports;
};

export type RequestFailureListAirportsType = {
  type: GetAirportsTypes.REQUEST_FAILURE;
  payload: string;
};

export type ListAirportsResultRequestType =
  | RequestSuccessListAirportsType
  | RequestFailureListAirportsType;

export type AirportsPayloadType = ListAirportsType | ListAirportsResultRequestType;
