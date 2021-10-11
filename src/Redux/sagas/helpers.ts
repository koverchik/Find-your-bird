import { User } from '@react-native-google-signin/google-signin';
import jwt_decode from 'jwt-decode';

type JWT_Token = {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  locale: string;
  name: string;
  picture: string;
  sub: string;
};

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
