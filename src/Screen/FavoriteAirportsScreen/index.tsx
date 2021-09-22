import React from 'react';
import { useAppSelector } from '@redux/hooks';
import { getFavoriteAirport } from '@redux/selectors';
import { AirportsList } from '@components/AirportsList';

export const FavoriteAirportsScreen = () => {
  const { favoriteAirports } = useAppSelector(getFavoriteAirport);

  return <AirportsList airportsListData={favoriteAirports} />;
};
