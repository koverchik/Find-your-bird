import { Coordinates, ResponseItemsAirports } from '../../api/type';

export enum GetAirportsTypes {
  REQUEST_LIST_AIRPORTS = 'REQUEST_LIST_AIRPORTS',
  REQUEST_LIST_AIRPORTS_SUCCESS = 'REQUEST_LIST_AIRPORTS_SUCCESS',
  REQUEST_LIST_AIRPORTS_FAILURE = 'REQUEST_LIST_AIRPORTS_FAILURE',
  REQUEST_DETAILS_AIRPORT = 'REQUEST_DETAILS_AIRPORT',
  REQUEST_DETAILS_AIRPORT_SUCCESS = 'REQUEST_DETAILS_AIRPORT_SUCCESS',
  REQUEST_DETAILS_AIRPORT_FAILURE = 'REQUEST_DETAILS_AIRPORT_FAILURE',
}

export type AirportsAction = {
  type: GetAirportsTypes.REQUEST_LIST_AIRPORTS;
  payload: any;
};

export type SignInPayload = { firstName: string; lastName: string; email: string };

export type PayloadAirports = {
  radius: number;
  coordinates: Coordinates;
};

export type AirportsListType = (payload: PayloadAirports) => {
  type: GetAirportsTypes.REQUEST_LIST_AIRPORTS;
  payload: PayloadAirports;
};

export type RequestSuccessAirportsListType = (payload: ResponseItemsAirports) => {
  type: GetAirportsTypes.REQUEST_LIST_AIRPORTS_SUCCESS;
  payload: ResponseItemsAirports;
};

export type RequestFailureAirportsListType = (payload: string) => {
  type: GetAirportsTypes.REQUEST_LIST_AIRPORTS_FAILURE;
  payload: string;
};

export type GetAirportsActions =
  | AirportsListType
  | RequestSuccessAirportsListType
  | RequestFailureAirportsListType;

export type PayloadListAirportsType = {
  radius: number;
  coordinates: Coordinates;
};

export type ListAirportsType = {
  type: GetAirportsTypes.REQUEST_LIST_AIRPORTS;
  payload: PayloadListAirportsType;
};

export type RequestSuccessListAirportsType = {
  type: GetAirportsTypes.REQUEST_LIST_AIRPORTS_SUCCESS;
  payload: ResponseItemsAirports;
};

export type RequestFailureListAirportsType = {
  type: GetAirportsTypes.REQUEST_LIST_AIRPORTS_FAILURE;
  payload: string;
};

export type ListAirportsResultRequestType =
  | RequestSuccessListAirportsType
  | RequestFailureListAirportsType;

export type AirportsPayloadType = ListAirportsType | ListAirportsResultRequestType;
