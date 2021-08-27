import { put } from 'redux-saga/effects';
import { uploadIconSuccess } from '../action';
import { UploadImagesAction } from '../action/types';

export function* uploadIconSaga(action: UploadImagesAction) {
  yield put(uploadIconSuccess(action.payload));
}
