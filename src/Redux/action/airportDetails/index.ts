import {
  GetAirportDetailsTypes,
  RequestAirportDetailsType,
  RequestFailureAirportDetailsType,
  RequestSuccessAirportDetailsType,
} from './types';

export const requestAirportDetails: RequestAirportDetailsType = (payload) => {
  return {
    type: GetAirportDetailsTypes.REQUEST_DETAILS_AIRPORT,
    payload,
  };
};

export const requestSuccessAirportDetails: RequestSuccessAirportDetailsType = (payload) => {
  return {
    type: GetAirportDetailsTypes.REQUEST_DETAILS_AIRPORT_SUCCESS,
    payload,
  };
};

export const requestFailureAirportDetails: RequestFailureAirportDetailsType = (payload) => {
  return {
    type: GetAirportDetailsTypes.REQUEST_DETAILS_AIRPORT_FAILURE,
    payload,
  };
};
