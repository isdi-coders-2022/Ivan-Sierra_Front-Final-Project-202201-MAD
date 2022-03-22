import axios, { AxiosResponse } from 'axios';

const LOGIN_API = 'http://localhost:4500/login/';

const REGISTER_API = 'http://localhost:4500/users/';

export function login(user:any): Promise<AxiosResponse> {
  return axios.post(LOGIN_API, user);
}

export function register(user:any): Promise<AxiosResponse> {
  return axios.post(REGISTER_API, user);
}
