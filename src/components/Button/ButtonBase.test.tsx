import { render, screen } from '../../test-utils';
import ButtonBase from './ButtonBase';

test('renders on the page with upload button', () => {
  render(<ButtonBase />);
  const button = screen.getByRole('button');
  expect(button).toHaveClass('MuiButton-contained');
});
