import {
  GetAirportsTypes as GetAirportsTypes,
  AuthActionType,
  AuthTypes,
  AirportsPayloadType as AirportsPayloadType,
} from '../action/types';
import { InitialStateType } from './types';

export const initialState: InitialStateType = {
  lastName: '',
  firstName: '',
  email: '',
  userIcon: '',
  loggedIn: false,
};

export const initialStateAirports = {
  airportsList: [],
  pending: false,
  error: null,
};

export const singIn = (state = initialState, action: AuthActionType) => {
  switch (action.type) {
    case AuthTypes.SING_IN:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        loggedIn: true,
      };
    case AuthTypes.SING_OUT:
      return initialState;
    case AuthTypes.UPLOAD_ICON:
      return {
        ...state,
        userIcon: action.payload,
      };
    default:
      return state;
  }
};

export const airports = (state = initialStateAirports, action: AirportsPayloadType) => {
  switch (action.type) {
    case GetAirportsTypes.REQUEST_LIST_AIRPORTS:
      return {
        ...state,
        pending: true,
      };
    case GetAirportsTypes.REQUEST_SUCCESS:
      return {
        ...state,
        pending: false,
        airportsList: action.payload.items,
        error: null,
      };
    case GetAirportsTypes.REQUEST_FAILURE:
      return {
        ...state,
        pending: false,
        airportsList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
