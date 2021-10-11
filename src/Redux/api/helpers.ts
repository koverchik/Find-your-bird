import { User } from '@react-native-google-signin/google-signin';
import jwt_decode from 'jwt-decode';
import { JWT_Token } from './type';

export function timeExpToken(idToken: User['idToken']): boolean {
  let refresh = true;
  if (idToken) {
    const dataToken: JWT_Token = jwt_decode(idToken);
    const tokenExp = dataToken.exp * 1000;
    const now = Date.now();
    refresh = now > tokenExp;
  }
  return refresh;
}
