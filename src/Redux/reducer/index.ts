import { combineReducers } from '@reduxjs/toolkit';
import { airports } from './airports';
import { auth } from './auth';
import { airportDetails } from './detailsAirport';
import { favoriteAirports } from '@redux/reducer/favoriteAirports';
import { video } from '@redux/reducer/video';

export const rootReducer = combineReducers({
  auth,
  airports,
  airportDetails,
  favoriteAirports,
  video,
});
