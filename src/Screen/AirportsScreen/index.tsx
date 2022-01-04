import React, { FC, useEffect } from 'react';
import { AirportsScreenProps } from './types';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { getAirports, getFavoriteAirport } from '@redux/selectors';
import { airportsList } from '@redux/action/airports';
import { AirportsList } from '@components/AirportsList';

export const AirportsScreen: FC<AirportsScreenProps> = (props) => {
  const dispatch = useAppDispatch();
  const { favoriteAirports } = useAppSelector(getFavoriteAirport);

  useEffect(() => {
    dispatch(airportsList(props.route.params));
  }, []);

  const { pending, airportsListData } = useAppSelector(getAirports);

  return <AirportsList pending={pending} airportsListData={airportsListData} />;
};
