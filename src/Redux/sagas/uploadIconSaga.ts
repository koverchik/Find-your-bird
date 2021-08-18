import { put } from 'redux-saga/effects';
import { uploadIconSuccess } from '../action';
import { UploadImages } from '../action/types';

export function* uploadIconSaga(action: UploadImages) {
  yield put(uploadIconSuccess(action.payload.iconUser));
}
