import axios, { AxiosResponse } from 'axios';
import { GarageI } from '../interfaces/garage';
import { GarageLoginI } from '../interfaces/garageLogin';

const LOGIN_API = 'http://localhost:5500/login/';

const REGISTER_API = 'http://localhost:5500/garages/';

export function login(user: GarageLoginI): Promise<AxiosResponse> {
  return axios.post(LOGIN_API, user);
}

export function insertGarage(user: GarageI): Promise<AxiosResponse> {
  return axios.post(REGISTER_API, user);
}
export function getAllGarages(user: GarageI): Promise<AxiosResponse> {
  return axios.post(REGISTER_API, user);
}
export function updateGarage(id: string): Promise<AxiosResponse> {
  return axios.patch(REGISTER_API + id);
}
export function deleteGarage(id: string): Promise<AxiosResponse> {
  return axios.delete(REGISTER_API + id);
}
export function getGarage(id: string): Promise<AxiosResponse> {
  return axios.get(REGISTER_API + id);
}
