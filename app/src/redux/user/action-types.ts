export interface ActionTypes{
  login : string;
  logout : string;
  register : string;
  create : string;
  update : string;
  delete : string;
}

export const actionTypesGarage : ActionTypes = {
  login: '@garage/login',
  logout: '@garage/logout',
  register: '@garage/register',
  update: '@garage/update',
  delete: '@garage/delete',
  create: '@garage/create',
};
