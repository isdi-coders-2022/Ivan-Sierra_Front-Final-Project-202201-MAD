import axios, { AxiosResponse } from 'axios';
import { GarageI } from '../interfaces/garage';
import { GarageLoginI } from '../interfaces/garageLogin';

const LOGIN_API = 'http://localhost:4500/login/';

const REGISTER_API = 'http://localhost:4500/users/';

export function login(user: GarageLoginI): Promise<AxiosResponse> {
  return axios.post(LOGIN_API, user);
}

export function register(user: GarageI): Promise<AxiosResponse> {
  return axios.post(REGISTER_API, user);
}
