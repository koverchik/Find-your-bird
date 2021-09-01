export type InitialStateAuthType = {
  lastName: string;
  firstName: string;
  email: string;
  userIcon: string;
  loggedIn: boolean;
};

export type InitialStateAirportsTypes = {
  airportsListData: AirportsListTypes[];
  pending: boolean;
  error: null | string;
};

export type AirportsListTypes = {
  icao: string;
  iata: string;
  name: string;
  shortName: string;
  municipalityName: string;
  location: {
    lat: number;
    lon: number;
  };
  countryCode: string;
};
