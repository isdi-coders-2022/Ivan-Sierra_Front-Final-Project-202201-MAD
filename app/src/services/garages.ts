import axios, { AxiosResponse } from 'axios';
import { GarageI } from '../interfaces/garage';
import { GarageLoginI } from '../interfaces/garageLogin';

const LOGIN_API = 'http://localhost:4500/login/';

const REGISTER_API = 'http://localhost:4500/users/';

export function login(user: GarageLoginI): Promise<AxiosResponse> {
  return axios.post(LOGIN_API, user);
}

export function insertGarage(user: GarageI): Promise<AxiosResponse> {
  return axios.post(REGISTER_API, user);
}
export function getAllGarages(user: GarageI): Promise<AxiosResponse> {
  return axios.post(REGISTER_API, user);
}
export function updateGarage(user: GarageI): Promise<AxiosResponse> {
  return axios.post(REGISTER_API, user);
}
export function deleteGarage(user: GarageI): Promise<AxiosResponse> {
  return axios.post(REGISTER_API, user);
}
export function getGarage(user: GarageI): Promise<AxiosResponse> {
  return axios.post(REGISTER_API, user);
}
