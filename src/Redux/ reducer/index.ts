import { C } from '../action/index';
import { InitialStateType } from './types';

export const initialState: InitialStateType = {
  lastName: '',
  firstName: '',
  email: '',
};

export const singIn = (
  state = initialState,
  action: { type: string; payload: { name: string; lastName: string; email: string } },
) => {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case C.SING_IN:
      return {
        ...state,
        firstName: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
      };
    default:
      return state;
  }
};
