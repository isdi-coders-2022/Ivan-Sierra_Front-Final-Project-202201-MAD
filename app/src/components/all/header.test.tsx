/* eslint-disable react/react-in-jsx-scope */
import { screen } from '@testing-library/react';
import Header from '../all/header';
import { render } from '../../utils/test.utils';
import { Routes, Route, MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    __esModule: true,
    ...originalModule,
    useParams: () => ({ isbn: '123' }),
  };
});

describe('Header', () => {
  test('Render NavRegister', () => {
    render(
      <MemoryRouter initialEntries={['/register/123']}>
        <Routes location={{ pathname: '/register/123' }}>
          <Route path="/register/123" element={<Header />} />
        </Routes>
      </MemoryRouter>
    );
  });

  const register = screen.getAllByText(/REGISTER/i);

  expect(register).toBeInTheDocument();
});
