/* eslint-disable default-param-last */
import { Action, AnyAction } from 'redux';
import { actionTypes } from './action-types';

const initialState = {
  token: '',
  userName: '',
  id: '',
  isLogged: false,
};

function userReducer(state:any = initialState, action: AnyAction):any {
  switch (action.type) {
    case actionTypes.login:
      return { ...action.payload, isLogged: true };
    case actionTypes.logout:
      return initialState;
    default:
      return state;
  }
}
export default userReducer;
