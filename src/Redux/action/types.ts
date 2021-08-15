export enum AuthTypes {
  SING_IN = 'SING_IN',
  SING_OUT = 'SING_OUT',
}

export type SignInAction = {
  type: AuthTypes.SING_IN;
  payload: payloadType;
};

export type SignOutAction = {
  type: AuthTypes.SING_OUT;
};

export type payloadType = { name: string; lastName: string; email: string };

export type AuthActionType = SignInAction | SignOutAction;
