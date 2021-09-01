import {
  AirportsListType,
  GetAirportsTypes,
  RequestFailureAirportsListType,
  RequestSuccessAirportsListType,
} from './types';

export const airportsList: AirportsListType = (payload) => {
  return {
    type: GetAirportsTypes.REQUEST_LIST_AIRPORTS,
    payload,
  };
};

export const requestSuccessAirportsList: RequestSuccessAirportsListType = (payload) => {
  return {
    type: GetAirportsTypes.REQUEST_SUCCESS,
    payload,
  };
};

export const requestFailureAirportsList: RequestFailureAirportsListType = (payload) => {
  return {
    type: GetAirportsTypes.REQUEST_FAILURE,
    payload,
  };
};
