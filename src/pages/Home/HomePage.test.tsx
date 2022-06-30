import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('should render HomePage component', () => {
  render(<HomePage />);
  const homePageElement = screen.getByText('Welcome');
  expect(homePageElement).toBeInTheDocument();
  expect(homePageElement).toHaveTextContent('come');
});
