/* eslint-disable default-param-last */
import { Action, AnyAction } from 'redux';
import { actionTypesGarage } from './action-types';

const initialState = {
  token: '',
  userName: '',
  id: '',
  isLogged: false,
};

export function garageReducer(
  state: any = initialState,
  action: AnyAction,
): any {
  switch (action.type) {
    case actionTypesGarage.login:
      return { ...action.payload, isLogged: true };
      
    case actionTypesGarage.logout:
      return initialState;

    case actionTypesGarage.update:
      return { ...action.payload, isLogged: true };

    case actionTypesGarage.register:
      return { ...action.payload };
    default:
      return state;
  }
}
