import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../utils/test.utils';
import Footer from './footer';


describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <Footer />
                </MemoryRouter>
            );

            // eslint-disable-next-line jest/valid-expect
            expect(screen.getAllByText(/©Fixcar/i));
        });
    });
});