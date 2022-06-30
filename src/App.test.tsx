import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

test('sign up for happy path', async () => {
  render(<App />);

  // Step Personal Info

  const firstNameTextField = screen.getByRole('textbox', {
    name: 'First name',
  });
  expect(firstNameTextField).toBeInTheDocument();

  const lastNameTextField = screen.getByRole('textbox', {
    name: 'Last name',
  });
  expect(lastNameTextField).toBeInTheDocument();

  userEvent.type(firstNameTextField, 'Van');
  userEvent.type(lastNameTextField, 'Binh');

  const buttonNextAtPersonal = screen.getByRole('button', { name: 'Next' });
  expect(buttonNextAtPersonal).toBeInTheDocument();

  await act(() => {
    userEvent.click(buttonNextAtPersonal);
  });

  // Step Avatar Info

  const buttonUploadAvatar = screen.getByRole('button', {
    name: 'Upload',
  });
  expect(buttonUploadAvatar).toBeInTheDocument();

  userEvent.click(buttonUploadAvatar);

  const buttonNextAtAvatar = screen.getByRole('button', { name: 'Next' });
  expect(buttonNextAtAvatar).toBeInTheDocument();

  await act(() => {
    userEvent.click(buttonNextAtAvatar);
  });

  // Step Review Info

  const fullName = screen.getByText('Van Binh');
  expect(fullName).toBeInTheDocument();
});
