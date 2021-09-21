import { AirportsListTypes } from '@redux/api/type';
import { InitialStateAirportsTypes } from '@redux/reducer/types';

export type AirportsListProps = {
  pending: InitialStateAirportsTypes['pending'];
  airportsListData: AirportsListTypes[];
};
