import { call, put, PutEffect } from 'redux-saga/effects';
import { signInSuccess } from '../action/auth';
import { GoogleSignin, User } from '@react-native-google-signin/google-signin';

export function* singInSaga() {
  try {
    const isSignedInUser: boolean = yield call(GoogleSignin.isSignedIn);

    const data: User = isSignedInUser
      ? yield call(GoogleSignin.getCurrentUser)
      : yield call(GoogleSignin.signIn);

    const dataUser = {
      firstName: data?.user?.givenName ?? '',
      lastName: data?.user?.familyName ?? '',
      email: data?.user?.email ?? '',
      userIcon: data?.user?.photo ?? '',
      idToken: data?.idToken ?? '',
    };

    yield put(signInSuccess(dataUser));
  } catch (e) {
    console.log('singInSaga catch');
    console.dir(e);
  }
}
