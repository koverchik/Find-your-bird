export enum AuthTypes {
  SING_IN = 'SING_IN',
  SING_OUT = 'SING_OUT',
}

export type SignInAction = (
  firstName: string,
  lastName: string,
  email: string,
) => {
  type: AuthTypes;
  payload: payload;
};

export type SignOutAction = () => {
  type: AuthTypes;
  payload: any;
};

export type payload = { name: string; lastName: string; email: string };

export type AuthActionType = {
  type: AuthTypes;
  payload: payload;
};
