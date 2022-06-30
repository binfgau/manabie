import { render, screen } from '@testing-library/react';
import MainNavigation from './MainNavigation';

test('render on the page with brand name', () => {
  render(<MainNavigation />);

  const brandName = screen.getByText('Manabie Education');
  expect(brandName).toBeInTheDocument();
});
