import { render, screen } from '@testing-library/react';
import Notify from './Notify';

test('renders on the page with success message', () => {
  render(<Notify />);
  const successMessage = screen.getByText('SUCCESS');
  expect(successMessage).toBeInTheDocument();
});
