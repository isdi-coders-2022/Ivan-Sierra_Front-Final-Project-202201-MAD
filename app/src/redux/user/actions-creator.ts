import { actionTypesGarage } from './action-types';
import { actionI } from '../../interfaces/interfaces';

export const login = (user: object): actionI => ({
  type: actionTypesGarage.login,
  payload: user,
});

export const logout = (): actionI => ({
  type: actionTypesGarage.logout,
});

export const updateGarage = (garage: object): actionI => ({
  type: actionTypesGarage.update,
  payload: garage,
});
export const registerGarage = (garage: object): actionI => ({
  type: actionTypesGarage.register,
  payload: garage,
});
export const deleteGarage = (garage: object): actionI => ({
  type: actionTypesGarage.delete,
  payload: garage,
});
