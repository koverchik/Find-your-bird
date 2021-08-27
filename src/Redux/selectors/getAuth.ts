import { RootState } from '../store';

export const getAuth = (store: RootState) => {
  return store.auth;
};
