import { render, screen } from '@testing-library/react';
import Layout from './Layout';

test('renders on the page with success message', () => {
  render(<Layout>Test layout children</Layout>);
  const successMessage = screen.getByText('Test layout children');
  expect(successMessage).toBeInTheDocument();
});
