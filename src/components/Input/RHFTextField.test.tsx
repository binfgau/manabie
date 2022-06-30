import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test-utils';

import RHFTextField from './RHFTextField';

test('render on the page with its label and without error message', () => {
  render(
    <RHFTextField
      nameRegister='testTextField'
      label='Test TextField'
      autoComplete='test'
      rules={{
        required: {
          value: true,
          message: 'This is a required field',
        },
      }}
    />
  );
  const textFieldLabel = screen.getByRole('textbox', {
    name: 'Test TextField',
  });
  expect(textFieldLabel).toBeInTheDocument;

  const errorMessage = screen.queryByText('This is a required field');
  expect(errorMessage).not.toBeInTheDocument();
});

test('this field is required', () => {
  render(
    <RHFTextField
      nameRegister='testTextField'
      label='Test TextField'
      autoComplete='test'
      rules={{
        required: {
          value: true,
          message: 'This is a required field',
        },
      }}
    />
  );

  const textField = screen.getByRole('textbox', {
    name: 'Test TextField',
  });
  expect(textField).toBeRequired();
});

test('prevent users typing spaces', () => {
  render(
    <RHFTextField
      nameRegister='testTextField'
      label='Test TextField'
      autoComplete='test'
      rules={{
        required: {
          value: true,
          message: 'This is a required field',
        },
      }}
    />
  );

  const errorMessage = screen.queryByText('This is a required field');

  const textField = screen.getByRole('textbox', {
    name: 'Test TextField',
  });
  userEvent.type(textField, '        ');
  expect(textField).toHaveTextContent('');
  expect(errorMessage).not.toBeInTheDocument();
});
