import axios, { AxiosResponse } from 'axios';

import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { requestFailureAirportsList, requestSuccessAirportsList } from '../action';
import { ListAirportsResultRequestType, ListAirportsType } from '../action/types';
import { ResponseItemsAirports } from '../api/type';
import { api } from '../store';

export function* airportsListSaga(
  action: ListAirportsType,
): Generator<
  CallEffect<AxiosResponse<ResponseItemsAirports>> | PutEffect<ListAirportsResultRequestType>,
  void,
  AxiosResponse<ResponseItemsAirports>
> {
  try {
    const { payload } = action;
    const { data } = yield call(api.getAirportsList, payload.radius, payload.coordinates);
    yield put(requestSuccessAirportsList(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(requestFailureAirportsList(error.message));
    }
  }
}
