import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../../utils/test.utils';

import AddPrices from './myGarage';

describe('Given Form component', () => {
  describe('When form is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <AddPrices />
        </MemoryRouter>
      );

      // eslint-disable-next-line jest/valid-expect
      expect(screen.getAllByText(/ruedas/i));
    });
  });
});
