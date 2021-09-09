import {
  RequestAirportDetailsType,
  GetAirportDetailsTypes,
  RequestFailureAirportDetailsType,
  RequestSuccessAirportDetailsType,
} from './types';

export const airportDetails: RequestAirportDetailsType = (payload) => {
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
