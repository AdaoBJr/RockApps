import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Footer from '../common/components/Footer';

import renderWithRouter from '../services/renderWithRouter';

describe('Testando toda a aplicação do Componente Footer', () => {
  it('Verifica se o título aparece no Footer', () => {
    renderWithRouter(<Footer />);

    const title = screen.getByText(/GoShoes/i);
    expect(title).toBeInTheDocument();
  });
});
