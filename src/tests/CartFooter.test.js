import '@testing-library/jest-dom';
import CartFooter from '../common/components/cart/CartFooter';

import renderWithRouter from '../services/renderWithRouter';

describe('Testando toda a aplicação do Componente CartFooter', () => {
  it('Verifica se os botões aparecem no CartFooter', () => {
    const { getByRole } = renderWithRouter(<CartFooter />);

    const btnClear = getByRole('button', {
      name: /Limpar Carrinho/i,
    });

    const btnCancel = getByRole('button', {
      name: /Cancelar Compra/i,
    });

    const btnPayment = getByRole('button', {
      name: /Pagamento/i,
    });

    expect(btnClear).toBeInTheDocument();
    expect(btnCancel).toBeInTheDocument();
    expect(btnPayment).toBeInTheDocument();
  });
});
