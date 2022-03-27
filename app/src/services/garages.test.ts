import axios from 'axios';
import { GarageI } from '../interfaces/garage';
import { GarageLoginI } from '../interfaces/garageLogin';
import * as garage from './garages';
jest.mock('axios');
describe('Given the service api', () => {
  let id: any;
  let garageUser: GarageI;
  let garageLogin: GarageLoginI;
  beforeAll(() => {
    id = '11111111';

    garageUser = {
      user: '',
      pass: '',
      garage_name: '',
      cif_nif: '',
      email: '',
      phone: '',
      web: '',
      address: '',
      services: {
        ruedas: 0,
        aceite: 0,
        filtros: 0,
        amortiguadores: 0,
        discos: 0,
        pastillas: 0,
        aire: 0,
        bombillas: 0,
      },
    };
    garageLogin = {
      name: '',
      pass: '',
    };
  });

  test('When getAll is running, axios.get should be called', () => {
    garage.getAllGarages(garageUser);
    expect(axios.get).toHaveBeenCalled();
  });
  test('When get is running, axios.get should be called', () => {
    garage.getGarage(id);
    expect(axios.get).toHaveBeenCalled();
  });
  test('When set is running, axios.post should be called', () => {
    garage.login(garageLogin);
    expect(axios.post).toHaveBeenCalled();
  });
  test('When update is running, axios.patch should be called', () => {
    garage.updateGarage(id);
    expect(axios.patch).toHaveBeenCalled();
  });
  test('When remove is running, axios.delete should be called', () => {
    garage.deleteGarage(id);
    expect(axios.delete).toHaveBeenCalled();
  });
});
