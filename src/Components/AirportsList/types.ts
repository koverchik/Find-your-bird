import { AirportsListTypes } from '@redux/api/type';

export type AirportsListProps = {
  pending: boolean;
  airportsListData: AirportsListTypes[];
};
