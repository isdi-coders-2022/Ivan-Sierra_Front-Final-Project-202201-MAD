import { render } from "../../../utils/test.utils";
import { screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import  TallerForm  from "../myGarage/registerGarage";


describe('TallerForm Component', () => {
  let preloadedState : any;

  beforeEach(() => {
    preloadedState = {
      garages: {
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
            }
          }
  }});
  test('should be rendered', () => {
      // eslint-disable-next-line react/react-in-jsx-scope
      render(<TallerForm />, { preloadedState });
      // eslint-disable-next-line jest/valid-expect
      expect(screen.getByPlaceholderText(/user/i));
      // eslint-disable-next-line jest/valid-expect
      expect(screen.getByPlaceholderText(/pass/i));
  });
});
//   beforeEach(() => {
//     preloadedState = {
//     user: '',
//     pass: '',
//     garage_name: '',
//     cif_nif: '',
//     email: '',
//     phone: '',
//     web: '',
//     address: '',
//     services: {
//       ruedas: 0,
//       aceite: 0,
//       filtros: 0,
//       amortiguadores: 0,
//       discos: 0,
//       pastillas: 0,
//       aire: 0,
//       bombillas: 0,
//     },
//