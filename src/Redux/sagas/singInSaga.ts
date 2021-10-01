import { put } from 'redux-saga/effects';
import { signInSuccess, signOut, signOutSuccess } from '../action/auth';
import { SignInAction } from '../action/auth/types';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { NamesErrors } from '../api/type';

function* singAuth(action) {
  try {
    auth().signInWithCredential(action);
  } catch (e) {
    if (e.code === NamesErrors.TokenInvalid) {
      yield put(signOutSuccess());
    }
  }
}

export function* singInSaga(action: SignInAction) {
  try {
    const { idToken } = yield GoogleSignin.signIn();
    console.log(action.payload);
    const googleCredential = action.payload
      ? auth.GoogleAuthProvider.credential(
          'eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkOTI5YzYzZmYxMDgyYmJiOGM5OWY5OTRmYTNmZjRhZGFkYTJkMTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzOTIwMzU2NDY0MjUtZzVyOWo1M3JsNDAzY283cmRwdXBiMGJwZ29nbm5uMGMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIzOTIwMzU2NDY0MjUtZ2x0ZjVlaWR2amYwMWV1MWc5NG1sZ3FwNWoyNnM3aHUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTEzNTQwNzc5ODMzNjYyNTQxMDciLCJlbWFpbCI6ImtvdmVyY2hpay5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoi0J7Qu9GPINCa0L7QstC10YDRh9C40LoiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2l3RjV0V2N1SnRIQzRzckpuVW1jM2xkaFhjZHJJN2xsaXVKYlBaVHc9czk2LWMiLCJnaXZlbl9uYW1lIjoi0J7Qu9GPIiwiZmFtaWx5X25hbWUiOiLQmtC-0LLQtdGA0YfQuNC6IiwibG9jYWxlIjoiYmUiLCJpYXQiOjE2MzI5OTg0MTksImV4cCI6MTYzMzAwMjAxOX0.A7Z3_KR17Tvk4uHkAEbHVvV-3E6yg-ZljSux0afdxCJyBe64SOlp_9PndaN574I_GIcbIwWsRKgPaWzOpo6HaiJhPgFVgQlAiHuJgfXkUZG0KvVNGezudzfrrtDfPy05Osx29yLdF0rXEp88CL0ZoJaE7aJl60AINN9AfPooI-N5wKFIpEwKgI2taB-EHSkIYdaFWy2fqVRNow2b6SrUOW-ktJPSQyxi2C9tJ0LQhZ9dRms8CtdqMdGzxXtP8knRnvFnfsQJiB4sEcssb5PObChoMfwc9u8pv-4YUc0g1ErGaBDrl-uEAkofgJANL3I_ijz1tCm8oTwdttEsJJfuRw',
        )
      : auth.GoogleAuthProvider.credential(idToken);

    const data = yield GoogleSignin.getCurrentUser();

    singAuth(googleCredential);

    const dataUser = {
      firstName: data?.user?.givenName ?? '',
      lastName: data?.user?.familyName ?? '',
      email: data?.user?.email ?? '',
      photo: data?.user?.photo ?? '',
      idToken: data?.idToken ?? '',
    };
    yield put(signInSuccess(dataUser));
  } catch (e) {
    console.dir(e);
  }
}
