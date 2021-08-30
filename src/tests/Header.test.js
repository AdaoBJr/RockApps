import React from 'react';
import Header from '../common/components/Header';

import renderWithRouter from '../services/renderWithRouter';

describe('Testando toda a aplicação do Componente Header', () => {
  it('Verifica se o título aparece no Header', () => {
    const { getByText } = renderWithRouter(<Header />);

    const title = getByText(/GoShoes/i);
    expect(title).toBeInTheDocument();
  });
});
