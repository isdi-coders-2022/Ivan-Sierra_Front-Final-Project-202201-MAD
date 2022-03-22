import { actionTypes } from "./action-types";

export function login(user: any){
  type: actionTypes.login
  payload: user
}

export  function logout (){
  type: actionTypes.logout
};
