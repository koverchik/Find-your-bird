import { AirportsPayloadType } from '../action/airports/types';
import { GetAirportsTypes } from '../action/airports/types';
import { InitialStateAirportsTypes } from './types';

export const initialStateAirports: InitialStateAirportsTypes = {
  airportsListData: [],
  pending: false,
  error: null,
};

export const airports = (state = initialStateAirports, action: AirportsPayloadType) => {
  switch (action.type) {
    case GetAirportsTypes.REQUEST_LIST_AIRPORTS:
      return {
        ...state,
        pending: true,
      };
    case GetAirportsTypes.REQUEST_LIST_AIRPORTS_SUCCESS:
      return {
        ...state,
        pending: false,
        airportsListData: action.payload.items,
        error: null,
      };
    case GetAirportsTypes.REQUEST_LIST_AIRPORTS_FAILURE:
      return {
        ...state,
        pending: false,
        airportsListData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
