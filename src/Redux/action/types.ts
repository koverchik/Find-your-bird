import { C } from './index';

export type SignInAction = (
  firstName: string,
  lastName: string,
  email: string,
) => {
  type: C;
  payload: any;
};
