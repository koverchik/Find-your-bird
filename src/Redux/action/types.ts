import { Asset } from 'react-native-image-picker/lib/typescript/types';
import {
  ResponseCities as ResponseCities,
  ResponseItemsCities as ResponseItemsCities,
} from '../api/type';

export enum AuthTypes {
  SING_IN = 'SING_IN',
  SING_IN_SUCCESS = 'SING_IN_SUCCESS',
  SING_OUT = 'SING_OUT',
  SING_OUT_SUCCESS = 'SING_OUT_SUCCESS',
  UPLOAD_ICON = 'UPLOAD_ICON',
  UPLOAD_ICON_SUCCESS = 'UPLOAD_ICON_SUCCESS',
  REQUEST_LIST_Cities = 'REQUEST_LIST_Cities',
}

export enum GetCitiesTypes {
  REQUEST_LIST_CITIES = 'REQUEST_LIST_Cities',
  REQUEST_SUCCESS = 'REQUEST_SUCCESS',
  REQUEST_FAILURE = 'REQUEST_FAILURE',
}

export type CitiesAction = {
  type: GetCitiesTypes.REQUEST_LIST_CITIES;
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
export type PayloadCities = {
  radius: number;
  coordinates: { latitude: number; longitude: number };
};

export type CitiesListType = (payload: PayloadCities) => {
  type: GetCitiesTypes.REQUEST_LIST_CITIES;
  payload: PayloadCities;
};

export type RequestSuccessType = (payload: ResponseItemsCities) => {
  type: GetCitiesTypes.REQUEST_SUCCESS;
  payload: ResponseItemsCities;
};

export type RequestFailureType = (payload: string) => {
  type: GetCitiesTypes.REQUEST_FAILURE;
  payload: string;
};

export type GetCitiesActions = CitiesListType | RequestSuccessType | RequestFailureType;

export type PayloadListCitiesType = {
  radius: number;
  coordinates: { latitude: number; longitude: number };
};

export type ListCitiesType = {
  type: GetCitiesTypes.REQUEST_LIST_CITIES;
  payload: PayloadListCitiesType;
};

export type RequestSuccessListCitiesType = {
  type: GetCitiesTypes.REQUEST_SUCCESS;
  payload: ResponseItemsCities;
};

export type RequestFailureListCitiesType = {
  type: GetCitiesTypes.REQUEST_FAILURE;
  payload: string;
};

export type ListCitiesResultRequestType =
  | RequestSuccessListCitiesType
  | RequestFailureListCitiesType;

export type CitiesPayloadType = ListCitiesType | ListCitiesResultRequestType;
