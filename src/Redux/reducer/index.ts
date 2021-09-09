import { combineReducers } from '@reduxjs/toolkit';
import { airports } from './airports';
import { auth } from './auth';
import { airportDetails } from './detailsAirport';

export const rootReducer = combineReducers({ auth, airports, airportDetails });
