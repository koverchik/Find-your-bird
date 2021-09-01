import { GetCitiesTypes, CitiesPayloadType } from '../action/types';

export const initialStateCities: InitialStateCitiesType = {
  citiesListData: [],
  pending: false,
  error: null,
};

export type InitialStateCitiesType = {
  citiesListData: CitiesListDataType[];
  pending: boolean;
  error: null | string;
};

export type CitiesListDataType = {
  country: string;
  countryCode: string;
  distance: number;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  region: string;
  regionCode: string;
  wikiDataId: string;
};

export const cities = (state = initialStateCities, action: CitiesPayloadType) => {
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
        citiesListData: action.payload.data,
        error: null,
      };
    case GetCitiesTypes.REQUEST_FAILURE:
      return {
        ...state,
        pending: false,
        citiesListData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
