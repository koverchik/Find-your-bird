import { combineReducers } from '@reduxjs/toolkit';
import { airports } from './airports';
import { auth } from './auth';

export const rootReducer = combineReducers({ auth, airports });
