import {
  GetCitiesTypes as GetCitiesTypes,
  AuthActionType,
  AuthTypes,
  CitiesPayloadType as CitiesPayloadType,
} from '../action/types';
import { InitialStateType } from './types';

export const initialState: InitialStateType = {
  lastName: '',
  firstName: '',
  email: '',
  userIcon: '',
  loggedIn: false,
};

export const initialStateCities = {
  CitiesList: [],
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

export const Cities = (state = initialStateCities, action: CitiesPayloadType) => {
  switch (action.type) {
    case GetCitiesTypes.REQUEST_LIST_CITIES:
      return {
        ...state,
        pending: true,
      };
    case GetCitiesTypes.REQUEST_SUCCESS:
      return {
        ...state,
        pending: false,
        CitiesList: action.payload.data,
        error: null,
      };
    case GetCitiesTypes.REQUEST_FAILURE:
      return {
        ...state,
        pending: false,
        CitiesList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
