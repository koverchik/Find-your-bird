import { ResponseDetailsAirport } from '../../api/type';

export enum GetAirportDetailsTypes {
  REQUEST_DETAILS_AIRPORT = 'REQUEST_DETAILS_AIRPORT',
  REQUEST_DETAILS_AIRPORT_SUCCESS = 'REQUEST_DETAILS_AIRPORT_SUCCESS',
  REQUEST_DETAILS_AIRPORT_FAILURE = 'REQUEST_DETAILS_AIRPORT_FAILURE',
}
export type RequestAirportDetailsType = (payload: string) => {
  type: GetAirportDetailsTypes.REQUEST_DETAILS_AIRPORT;
  payload: string;
};

export type RequestSuccessAirportDetailsType = (payload: ResponseDetailsAirport) => {
  type: GetAirportDetailsTypes.REQUEST_DETAILS_AIRPORT_SUCCESS;
  payload: ResponseDetailsAirport;
};

export type RequestFailureAirportDetailsType = (payload: string) => {
  type: GetAirportDetailsTypes.REQUEST_DETAILS_AIRPORT_FAILURE;
  payload: string;
};

export type AirportDetailsType = {
  type: GetAirportDetailsTypes.REQUEST_DETAILS_AIRPORT;
  payload: string;
};

export type SuccessAirportDetailsType = {
  type: GetAirportDetailsTypes.REQUEST_DETAILS_AIRPORT_SUCCESS;
  payload: ResponseDetailsAirport;
};

export type FailureAirportDetailsType = {
  type: GetAirportDetailsTypes.REQUEST_DETAILS_AIRPORT_FAILURE;
  payload: string;
};

export type AirportDetailsActionsType = AirportDetailsType | DetailsActionsResultRequestType;

export type DetailsActionsResultRequestType = SuccessAirportDetailsType | FailureAirportDetailsType;
