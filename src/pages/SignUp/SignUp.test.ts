import { render, screen } from '@testing-library/react';
import SignUp from './SignUp';
import userEvent from '@testing-library/user-event';

test('sign up for happy path', () => {
  render(<SignUp />);
});
