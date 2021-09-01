import axios, { AxiosResponse } from 'axios';

import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { requestFailureCitiesList, requestSuccessCitiesList } from '../action';
import { ListCitiesResultRequestType, ListCitiesType } from '../action/types';
import { ResponseItemsCities } from '../api/type';
import { api } from '../store';

export function* CitiesListSaga(
  action: ListCitiesType,
): Generator<
  CallEffect<AxiosResponse<ResponseItemsCities>> | PutEffect<ListCitiesResultRequestType>,
  void,
  AxiosResponse<ResponseItemsCities>
> {
  try {
    const { payload } = action;
    const { data } = yield call(api.getCities, payload.radius, payload.coordinates);
    yield put(requestSuccessCitiesList(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(requestFailureCitiesList(error.message));
    }
  }
}
