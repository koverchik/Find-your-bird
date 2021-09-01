import { put } from 'redux-saga/effects';
import { uploadIconSuccess } from '../action/auth/index';
import { UploadImagesAction } from '../action/auth/types';

export function* uploadIconSaga(action: UploadImagesAction) {
  yield put(uploadIconSuccess(action.payload));
}
