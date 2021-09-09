import { AirportDetailsActionsType, GetAirportDetailsTypes } from '../action/airportDetails/types';
import { initialDetailsAirportStateTypes } from './types';

export const initialDetailsAirportState: initialDetailsAirportStateTypes = {
  airportData: null,
  pending: false,
  error: null,
};

export const airportDetails = (
  state = initialDetailsAirportState,
  action: AirportDetailsActionsType,
) => {
  switch (action.type) {
    case GetAirportDetailsTypes.REQUEST_DETAILS_AIRPORT:
      return {
        ...state,
        pending: true,
      };
    case GetAirportDetailsTypes.REQUEST_DETAILS_AIRPORT_SUCCESS:
      return {
        ...state,
        pending: false,
        airportData: action.payload,
        error: null,
      };
    case GetAirportDetailsTypes.REQUEST_DETAILS_AIRPORT_FAILURE:
      return {
        ...state,
        pending: false,
        airportData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
