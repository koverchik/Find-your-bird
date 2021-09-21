import React, { FC, useEffect } from 'react';
import { FavoriteAirportsScreenProps } from './types';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { getAirports } from '@redux/selectors';
import { airportsList } from '@redux/action/airports';
import { AirportsList } from '@components/AirportsList';

export const FavoriteAirportsScreen: FC<FavoriteAirportsScreenProps> = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(airportsList(props.route.params));
  }, []);

  const { pending, airportsListData } = useAppSelector(getAirports);

  return <AirportsList pending={pending} airportsListData={airportsListData} />;
};
