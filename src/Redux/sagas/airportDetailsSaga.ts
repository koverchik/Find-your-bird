import axios, { AxiosResponse } from 'axios';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import {
  requestFailureAirportDetails,
  requestSuccessAirportDetails,
} from '../action/airportDetails';
import {
  AirportDetailsType,
  DetailsActionsResultRequestType,
} from '../action/airportDetails/types';
import { ResponseDetailsAirport } from '../api/type';
import { api } from '../store';

export function* airportDetailsSaga(
  action: AirportDetailsType,
): Generator<
  CallEffect<AxiosResponse<ResponseDetailsAirport>> | PutEffect<DetailsActionsResultRequestType>,
  void,
  AxiosResponse<ResponseDetailsAirport>
> {
  try {
    const { payload } = action;
    const { data } = yield call(api.getDetailsAirport, payload);
    yield put(requestSuccessAirportDetails(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(requestFailureAirportDetails(error.message));
    }
  }
}
