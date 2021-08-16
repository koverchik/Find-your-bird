export enum AuthTypes {
  SING_IN = 'SING_IN',
  SING_OUT = 'SING_OUT',
}

export type SignInAction = {
  type: AuthTypes.SING_IN;
  payload: SignInPaylod;
};

export type SignOutAction = {
  type: AuthTypes.SING_OUT;
};

export type SignInPaylod = { firstName: string; lastName: string; email: string };

export type AuthActionType = SignInAction | SignOutAction;
