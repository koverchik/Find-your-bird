import {
  AirportsListType,
  GetAirportsTypes,
  RequestFailureType,
  RequestSuccessType,
  SignInPayload,
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

export const signInSuccess: SignInSuccessType = (payload: SignInPayload) => {
  return {
    type: AuthTypes.SING_IN_SUCCESS,
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

export const airportsList: AirportsListType = (payload) => {
  return {
    type: GetAirportsTypes.REQUEST_LIST_AIRPORTS,
    payload,
  };
};

export const requestSuccessAirportsList: RequestSuccessType = (payload) => {
  return {
    type: GetAirportsTypes.REQUEST_SUCCESS,
    payload,
  };
};

export const requestFailureAirportsList: RequestFailureType = (payload) => {
  return {
    type: GetAirportsTypes.REQUEST_FAILURE,
    payload,
  };
};
