import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../../utils/test.utils';
import ButtonAddChanges from './buttonChanges';

describe('Given Form component', () => {
  describe('When form is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <ButtonAddChanges />
        </MemoryRouter>
      );

      // eslint-disable-next-line jest/valid-expect
      expect(screen.getAllByText(/Guardar Cambios/i));
    });
  });
});
