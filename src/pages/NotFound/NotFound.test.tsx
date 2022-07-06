import { render, screen } from '@testing-library/react';

import NotFound from './index';

describe('NotFound component', () => {
  test('NotFound render', () => {
    render(<NotFound />);

    expect(screen.getByText('Ничего не найдено')).toBeInTheDocument();
    expect(
      screen.getByText('К сожалению, указанная страница отсутвует в нашем интернет-магазине'),
    ).toBeInTheDocument();
  });
});
